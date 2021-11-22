import { Module } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { RelationsController } from './relations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/Photo';
import { Metadata } from './entities/Metadata';
import { Author } from './entities/Author';
import { Album } from './entities/Album';

@Module({
  controllers: [RelationsController],
  providers: [RelationsService],
  imports: [TypeOrmModule.forFeature([Photo, Metadata, Author, Album])],
})
export class RelationsModule {}
