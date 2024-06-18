import { RoadmapEntity } from "src/roadmap/entities/RoadmapEntity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Type } from "../dto/TypeEnum"
import {v4 as uuidv4} from 'uuid'

@Entity({ name: 'etapa' })
export class EtapaEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: "title", nullable: false })
    title: string;

    @Column({ name: "type", nullable: false, default: Type.ARTIGO })
    type: Type;

    @Column({ name: "ordem", nullable: false })
    ordem: number;

    @Column({ name: "roadmap_id", nullable: false })
    roadmap_id: string;

    @Column({ name: "link", nullable: false })
    link: string;

    @ManyToOne(() => RoadmapEntity, (roadmap) => roadmap.etapas)
    @JoinColumn({ name: 'roadmap_id', referencedColumnName: 'id' })
    roadmap?: RoadmapEntity;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
