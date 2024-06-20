import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { VoluntarioEntity } from "./VoluntarioEntities"

@Entity({name : 'voluntariado'})
export class VoluntariadoEntity{
    @PrimaryGeneratedColumn('uuid')
    id : string
    @Column({name : 'name' , nullable : false})
    name : string
    @Column({name : 'phone' , nullable : false})
    phone: string
    @Column({name : 'email' , nullable : false})
    email: string
    @Column({name : 'vaga_id' , nullable : false})
    vaga_id : string


    @ManyToOne(() => VoluntarioEntity, (vaga) => vaga.person)
    @JoinColumn({ name: 'vaga_id', referencedColumnName: 'id' })
    voluntariado?: VoluntarioEntity;
}