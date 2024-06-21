import { EtapaEntity } from "src/etapa/entities/EtapaEntity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StackEnum } from "../dto/StackEnum";

@Entity({name: 'roadmap'})
export class RoadmapEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({name : "name" , nullable : false} )
    name : string
    @Column({name : "description" , nullable : false} )
    description : string
    @Column({ type: 'enum', enum: StackEnum, default: StackEnum.FRONTEND })
    stack: StackEnum;

    @OneToMany(() => EtapaEntity, (etapa) => etapa.roadmap)
    etapas? : EtapaEntity[]
}