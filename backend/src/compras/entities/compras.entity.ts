// entidade para tabelas
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('compras')
export class TCompras {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nomeProd: string;

    @Column()
    quantidade: number;

    @Column()
    preco: number;
}