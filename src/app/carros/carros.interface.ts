import { EquipeInterface } from "src/app/equipe";
import { PilotoInterface } from "src/app/pilotos/piloto.model";
import { CarroInterface } from "./carros.model";
import { isNumber, isString } from "src/app/core/functions";

export class Carro {
    id?: string;
    chassi: number;
    fabricacao: Date;
    placa: string;
    equipes: EquipeInterface[];
    pilotos: PilotoInterface[];
  

    constructor(data: CarroInterface) {
        this.id = isString(data.id);
        this.chassi = isNumber(data.chassi);
        this.placa = isString(data.placa);
        this.fabricacao = (data.fabricacao);
        this.equipes = data.equipes;
        this.pilotos = data.pilotos;
        
    }
}