import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'enrollment'})
export class EnrollmentEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({name : "name" , nullable : false} )
    name : string
    @Column({name : "phone" , nullable : false} )
    phone : string
    @Column({name : "email" , nullable : false})
    email: string;
    @Column({name : "hability" , nullable : false})
    hability: string;
}