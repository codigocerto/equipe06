import { RoadmapEntity } from "src/roadmap/entities/RoadmapEntity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Type } from "../dto/TypeEnum";

@Entity({name: 'etapa'})
export class EtapaEntity{
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({name : "title" , nullable : false} )
    title : string
    @Column({name : "type" , nullable : false} )
    type : Type
    @Column({name : "ordem" , nullable : false} )
    ordem : number

    @Column({name : "roadmap_id" , nullable : false} )
    roadmap_id: number

    @Column({name : "link" , nullable : false} )
    link: string

    @ManyToOne(() => RoadmapEntity , (roadmap) => roadmap.etapas)
    @JoinColumn({name : 'roadmap_id' , referencedColumnName: 'id'})
    roadmap?:RoadmapEntity
}