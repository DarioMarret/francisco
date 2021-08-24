import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne} from 'typeorm'
import { Reporte } from './Reporte';
import { Propietario } from './Propietario';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @ManyToOne(()=>Propietario, propietario =>propietario.id)
  @JoinColumn({name:"acceso_usuario"})
  acceso_usuario:Propietario;

  @Column("varchar",{length : 100, nullable: false})
  nombre: string;

  @Column("varchar",{length : 100, nullable: false})
  apellido: string;
  
  @Column("varchar",{length : 100, nullable: false})
  usuario: string;

  @Column("varchar",{length : 100, nullable: false})
  password: string;

  @Column("varchar",{length : 100, nullable: false})
  perfil: string; 

  @OneToMany(()=>Reporte, reporte=>reporte.reporte_id,{eager:true})
  @JoinColumn({name:"reporte"})
  reporte?:Reporte[];
}