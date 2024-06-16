import { EtapaEntity } from "src/etapa/entities/EtapaEntity";
import { RoadmapEntity } from "../entities/RoadmapEntity";
import { ReturnEtapaDTO } from "src/etapa/dto/returnEtapa.dto";
import { StackEnum } from "./StackEnum";

export class ReturnRoadmapDTO {
    id:number
    name: string;
    description: string;
    stack: StackEnum;
    
    etapas?: ReturnEtapaDTO[];
  
    constructor(roadmapEntity: RoadmapEntity) {
      this.id = roadmapEntity.id;
      this.name = roadmapEntity.name;
      this.description = roadmapEntity.description;
      this.stack = roadmapEntity.stack;
  
      this.etapas = roadmapEntity.etapas
      ? roadmapEntity.etapas.map((etapa) => new ReturnEtapaDTO(etapa))
      : undefined
    }
  }