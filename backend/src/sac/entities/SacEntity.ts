import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'sac'})
export class SacEntity{
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({name : "name" , nullable : false} )
    name : string
    @Column({name : "email" , nullable : false} )
    email : string
    @Column({name : "content" , nullable : false} )
    content : string

    @Column({name : "date" , nullable : false} )
    date : Date


}