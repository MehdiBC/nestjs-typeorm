import { Controller, Get, Param } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { Photo } from './entities/Photo';
import { Metadata } from './entities/Metadata';
import { Author } from './entities/Author';
import { Album } from './entities/Album';

@Controller('relations')
export class RelationsController {
  constructor(private readonly relationsService: RelationsService) {}

  @Get()
  async test(): Promise<Photo[]> {
    //define author
    const author = new Author();
    author.name = 'mehdi';

    // define metadata of photo
    const metadata = new Metadata();
    metadata.height = 3;
    metadata.width = 3;

    // define photo
    const photo = new Photo();
    photo.name = '';
    photo.description = '';
    photo.path = '';

    // map the relations
    photo.metadata = metadata;
    photo.author = author;

    // save the photo and cascade that to metadata
    const savePhoto = await this.relationsService.savePhoto(photo);
    console.log(savePhoto);

    return this.relationsService.findAllPhotos();
  }

  @Get('album')
  async saveAlbum(): Promise<Album> {
    // define album
    const album = new Album();
    album.name = 'album1';

    // map relation
    album.photos = this.relationsService.findAllPhotos();

    return this.relationsService.saveAlbum(album);
  }

  @Get('album/all')
  findAlbums(): Promise<Album[]> {
    return this.relationsService.findAllAlbums();
  }

  @Get('album/:id')
  findOneAlbum(@Param('id') id: number): Promise<Album> {
    return this.relationsService.findOneAlbum(id);
  }
}
