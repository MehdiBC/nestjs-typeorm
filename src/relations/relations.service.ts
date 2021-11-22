import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/Photo';
import { Metadata } from './entities/Metadata';
import { Author } from './entities/Author';
import { Album } from './entities/Album';

@Injectable()
export class RelationsService {
  constructor(
    @InjectRepository(Photo)
    private readonly repoPhoto: Repository<Photo>,
    @InjectRepository(Metadata)
    private readonly repoMetadata: Repository<Metadata>,
    @InjectRepository(Author)
    private readonly repoAuthor: Repository<Author>,
    @InjectRepository(Album)
    private readonly repoAlbum: Repository<Album>,
  ) {}

  async findAllPhotos(): Promise<Photo[]> {
    return this.repoPhoto.find({ relations: ['metadata', 'author'] });
  }

  findAllAlbums(): Promise<Album[]> {
    return this.repoAlbum.find();
  }

  async findOneAlbum(id: number): Promise<Album> {
    return this.repoAlbum.findOne({ id });
  }

  saveAuthor(author: Author): Promise<Author> {
    return this.repoPhoto.save(author);
  }

  saveMetadata(metadata: Metadata): Promise<Metadata> {
    return this.repoMetadata.save(metadata);
  }

  savePhoto(photo: Photo): Promise<Photo> {
    return this.repoPhoto.save(photo);
  }

  saveAlbum(album: Album): Promise<Album> {
    return this.repoAlbum.save(album);
  }
}
