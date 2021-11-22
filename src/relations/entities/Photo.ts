import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Metadata } from './Metadata';
import { Author } from './Author';

@Entity('photos')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('text')
  description: string;
  @Column()
  path: string;
  @OneToOne(() => Metadata, { cascade: true })
  @JoinColumn()
  metadata: Metadata;
  @ManyToOne(() => Author, { cascade: true })
  author: Author;
}
