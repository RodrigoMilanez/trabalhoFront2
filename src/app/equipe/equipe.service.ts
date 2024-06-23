import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EquipeInterface } from "./interfaces/equipeModel";

@Injectable({
    providedIn: 'root'
  })
  export class EquipeService {
  
    private url = 'http://localhost:3000/equipes';
  
    constructor(
      private httpClient: HttpClient
    ) {}
  
    getEquipes(): Observable<EquipeInterface[]> {
      return this.httpClient.get<EquipeInterface[]>(this.url);
    }
    
    getEquipe(id: string): Observable<EquipeInterface> {
      return this.httpClient.get<EquipeInterface>(`${this.url}/${id}`);
    }

  
    excluir(id: string): Observable<Object> {
      return this.httpClient.delete(`${this.url}/${id}`);
    }
  
    getAutor(id: string): Observable<EquipeInterface> {
      return this.httpClient.get<EquipeInterface>(`${this.url}/${id}`);
    }
  
    private adicionar(equipe: EquipeInterface)  {
      return this.httpClient.post(this.url, equipe);
    }
  
    private atualizar(equipe: EquipeInterface) {
      return this.httpClient.put(`${this.url}/${equipe.id}`, equipe);
    }
  
    salvar(equipe: EquipeInterface) {
      if(equipe.id) {
        return this.atualizar(equipe);
      } else {
        return this.adicionar(equipe);
      }
    }
  }