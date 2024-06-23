import { CarroInterface } from "../carros";
import { isNumber, isString } from "../core/functions";
import { EquipeInterface } from "../equipe";
import { PilotoInterface } from "./piloto.model";
import { StatusEnum } from "./types/statusEnum";

export class Piloto {
    id?: string;
    nome: string;
    dataNasc: Date;
    numero: number;
    status: StatusEnum;
    equipe: EquipeInterface[];
    carro: CarroInterface[];
  

    constructor(data: PilotoInterface) {
        this.id = isString(data.id);
        this.nome = isString(data.nome)
        this.numero = isNumber(data.numero)
        this.dataNasc = (data.dataNasc);
        this.status = data.status;
        this.equipe = data.equipe;
        this.carro = data.carro;
        
    }
}
/**
    "dataNasc": "1997-09-01",
    "numero": 95,
    "status": "I",
    "equipe": {
      "id": "e3ae8699-75a4-4895-a621-8e23d5e15b65",
      "nome": "Scuderia Ferrari HP",
      "dataFundacao": "1929-11-16",
      "pilotosAtivos": 0,
      "numero": 1,
      "origem": "Maranello - IT"
    },
    "carro": {
      "id": "110ec2df-2df3-4c88-8768-e2341846500f",
      "chassi": 1,
      "fabricacao": "1997-09-22",
      "placa": "prooto2",
      "status": "I"
    }
 */
