import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, MinLength, MaxLength, IsAlphanumeric } from 'class-validator'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsAlphanumeric({ message: "Name can not contain any spaces or special characters" })
    @MinLength(3, { message: "Name must be at least 3 characters long" })
    @MaxLength(20,{ message: "Name must be less than 20 characters" })
    name: string;

    @Column({ type: "varchar", unique: true })
    @IsEmail(undefined, { message: "Email must be properly formatted" })
    email: string;

    @Column()
    password: string;
}
