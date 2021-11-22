import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from './Photo';

@Entity('metadatas')
export class Metadata {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  width: number;
  @Column()
  height: number;
  @OneToOne(() => Photo, (photo) => photo.metadata)
  photo: Photo;
}
