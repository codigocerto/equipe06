import { SacEntity } from "../entities/SacEntity"



export class SacDTO{
    name : string
    email: string
    content: string
    date:string

    constructor(enrollment : SacEntity){
        this.name = enrollment.name
        this. content = enrollment. content
        this.email = enrollment.email
        this.date = enrollment.date
    }

}