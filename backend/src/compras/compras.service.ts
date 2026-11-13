import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DTOcompras } from "./dto/compras.dto.js";
import { InjectRepository } from "@nestjs/typeorm";
import { TCompras } from "./entities/compras.entity.js";
import { Repository } from "typeorm/browser";


@Injectable()
export class ComprasService {

    constructor(
        @InjectRepository(TCompras)
        private ComprasRepository: Repository<TCompras>
    ) {}

    // busca por todos os produtos
    allItens(): Promise<TCompras[]> {
        return this.ComprasRepository.find()
    }

    async addItem(dto: DTOcompras) {

        const newProd = await this.ComprasRepository.find({
            where: {nomeProd: dto.nomeProd}
        })

        if (!newProd)
        {
            await this.ComprasRepository.insert({
                nomeProd: dto.nomeProd,
                quantidade: dto.quantidade,
                preco: dto.preco
            })

            return {'status': HttpStatus.CREATED}
        }
        else
        {
            return new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'Produto já cadastrado'
            },
            HttpStatus.CONFLICT
            )
        }
    }
}