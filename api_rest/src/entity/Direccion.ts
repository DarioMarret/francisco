import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Usuario } from './Usuario';

@Entity()
export class Direccion{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{length:160, nullable: false})
    direccion:string;

    @Column("varchar",{length:160})
    referencia:string;

    @Column("varchar",{length:13, nullable: false})
    telefono:string;

    @Column("varchar",{length:60})
    ciudad:string;

    @Column("varchar",{length:60})
    provincia:string;

    @ManyToOne(()=>Usuario, usuario =>usuario.id)
    @JoinColumn({name:"direccion_id"})
    direccion_id:Usuario;
}