import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PilotoInterface } from "../piloto.model";

@Injectable({
    providedIn: 'root'
  })
  export class PilotoService {
  
    private url = 'http://localhost:3000/pilotos';
  
    constructor(
      private httpClient: HttpClient
    ) {}
  
    getPilotos(): Observable<PilotoInterface[]> {
      return this.httpClient.get<PilotoInterface[]>(this.url);
    }
  
    excluir(id: string): Observable<Object> {
      return this.httpClient.delete(`${this.url}/${id}`);
    }
  
    getPiloto(id: string): Observable<PilotoInterface> {
      return this.httpClient.get<PilotoInterface>(`${this.url}/${id}`);
    }
  
    private adicionar(piloto: PilotoInterface)  {
      return this.httpClient.post(this.url, piloto);
    }
  
    private atualizar(piloto: PilotoInterface) {
      return this.httpClient.put(`${this.url}/${piloto.id}`, piloto);
    }
  
    salvar(piloto: PilotoInterface) {
      if(piloto.id) {
        return this.atualizar(piloto);
      } else {
        return this.adicionar(piloto);
      }
    }
  }