import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DTOcompras {
    @IsNotEmpty()
    @IsString()
    nomeProd: string;

    @IsNumber()
    quantidade: number;

    @IsNotEmpty()
    @IsNumber()
    preco: number;
}