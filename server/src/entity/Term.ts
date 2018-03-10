import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Term {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", unique: true })
    name: string;
}
