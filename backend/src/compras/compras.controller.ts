import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ComprasService } from "./compras.service.js";
import { DTOcompras } from "./dto/compras.dto.js";

@Controller('lista')
export class ComprasController {
    constructor(private comprasService: ComprasService) {}

    // rota raiz para vizualizar a lista de compras
    @Get()
    @HttpCode(HttpStatus.OK)
    async allItens(@Body() all: any) 
    {
        return await this.comprasService.allItens()
    }

    // adiciona um produto da lista de compras ao banco de dados

    @Post('add')
    @HttpCode(HttpStatus.CREATED)
    addItem(@Body() dto: DTOcompras)
    {
        return this.comprasService.addItem(dto)
    }
}