import { EnrollmentEntity } from "../entities/EnrollmentEntity"


export class EnrollmentDTO{
    name : string
    phone: string
    email: string
    hability:string

    constructor(enrollment : EnrollmentEntity){
        this.name = enrollment.name
        this.phone = enrollment.phone
        this.email = enrollment.email
        this.hability = enrollment.hability
    }

}