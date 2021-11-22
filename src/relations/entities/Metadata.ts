import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './Photo';

@Entity('metadata')
export class Metadata {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  width: number;
  @Column()
  height: number;
  @OneToOne(() => Photo, { cascade: true })
  @JoinColumn()
  photo: Photo;
}
