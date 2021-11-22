import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './Photo';

@Entity('albums')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Photo, { cascade: true })
  @JoinTable()
  photos: Promise<Photo[]>;
}
