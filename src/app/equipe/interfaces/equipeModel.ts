import { PilotoInterface } from "src/app/pilotos";

export interface EquipeInterface {
    id?: string | null;
    nome: string;
    dataFundacao: Date;
    numero: number | null;
    pilotosAtivos: number;
    origem: string;
    pilotos: PilotoInterface;

  /** "id": "e3ae8699-75a4-4895-a621-8e23d5e15b65",
    "nome": "Scuderia Ferrari HP",
    "dataFundacao": "1929-11-16",
    "pilotosAtivos": 0,
    "numero": 1,
    "origem": "Maranello - IT",
    "pilotos"
   */
}