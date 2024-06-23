import { PilotoInterface } from "src/app/pilotos";

export interface EquipeInterface {
    id?: string | null;
    nome: string;
    dataFundacao: Date;
    numero: number | null;
    pilotosAtivos: number;
    origem: string;
    pilotos: PilotoInterface;

}