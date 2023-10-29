import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('video')
export class Video{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    url: string

    @ManyToOne(() => Room, room => room.videos)
    @JoinColumn({name: 'room_id'})
    room: Room
}