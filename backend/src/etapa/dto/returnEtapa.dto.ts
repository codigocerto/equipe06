import { EtapaEntity } from "../entities/EtapaEntity"
import { Type } from "./TypeEnum"


export class ReturnEtapaDTO{
    title : string
    type : Type
    ordem : number
    link : string
    
    constructor(etapa: EtapaEntity){
       
        this.title = etapa.title
        this.type = etapa.type
        this.ordem = etapa.ordem
        this.link = etapa.link
    }
}