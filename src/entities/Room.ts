import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('room')
export class Room{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    name: string
}