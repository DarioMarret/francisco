import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm'
import { Usuario } from './Usuario';

@Entity()
export class Reporte{
    @PrimaryGeneratedColumn({name:"id"})
    id: number;

    @Column("varchar",{length:160, nullable: false})
    pendientes:string;

    @Column("text")
    img_recibo:string;

    @CreateDateColumn({type: 'datetime'})
    fecha:Date;

    @Column("varchar",{length:60})
    estado:string;

    @ManyToOne(()=>Usuario, usuario =>usuario.id)
    @JoinColumn({name:"reporte"})
    reporte_id:Usuario;
}