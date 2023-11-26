import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";

@Entity('room')
export class Room{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', nullable: true})
    description: string

    @OneToMany(() => Video, video => video.room)
    videos: Video[]
}