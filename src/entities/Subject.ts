import { text } from "stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('subject')
export class Subject{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    
}