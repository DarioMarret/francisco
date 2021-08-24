import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Usuario } from './Usuario';

@Entity()
export class Propietario{
    @PrimaryGeneratedColumn({name:"id"})
    id: number;

    @Column("varchar",{length:13, nullable: false})
    cedula:string;

    @Column("varchar",{length:100, nullable: false})
    nombre:string;

    @Column("varchar",{length:100, nullable: false})
    apellido:string;

    @Column("text")
    fecha_nacimiento:string;

    @Column("text")
    fecha_compra:string;

    @Column("varchar",{length:10, nullable: false})
    manzana:string;

    @Column("varchar",{length:10, nullable: false})
    villa:string;

    @Column("varchar",{length:13, nullable: false})
    telefono:string;

    @Column("varchar",{length : 100, nullable: false , unique:true})
    email:string;

    @Column("boolean")
    estado:boolean;

    @Column("varchar",{length:60})
    p_facturacion:string;

    @OneToMany(()=>Usuario, usuario =>usuario.acceso_usuario,{eager:true})
    @JoinColumn({name:"acceso_usuario"})
    acceso_usuario:Usuario[];
}