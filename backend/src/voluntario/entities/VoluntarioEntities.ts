import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { VoluntariadoEntity } from "./VoluntariadoEntities";

@Entity({name : 'voluntario'})
export class VoluntarioEntity{

    @PrimaryGeneratedColumn('uuid')
    id : string
    @Column({name :"title" , nullable : false})
    title : string
    @Column({name :"description" , nullable : false})
    description : string
    @Column({name :"vacancies" , nullable : false , default : 0})
    qtdVacancies : number


    @OneToMany(() => VoluntariadoEntity, (person) => person.voluntariado)
    person? : VoluntariadoEntity[]

}