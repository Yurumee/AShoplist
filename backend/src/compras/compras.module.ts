import { Module } from "@nestjs/common";
import { ComprasController } from "./compras.controller.js";
import { ComprasService } from "./compras.service.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TCompras } from "./entities/compras.entity.js";

@Module({
    imports: [TypeOrmModule.forFeature([TCompras])],
    controllers: [ComprasController],
    providers: [ComprasService],
    exports: [TypeOrmModule]
})

export class ComprasModule {}