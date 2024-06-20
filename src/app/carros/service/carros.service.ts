import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarroInterface} from "../carros.model";

@Injectable({
    providedIn: 'root'
  })
  export class CarroService {
  
    private url = 'http://localhost:3000/carros';
  
    constructor(
      private httpClient: HttpClient
    ) {}
  
    getCarros(): Observable<CarroInterface[]> {
      return this.httpClient.get<CarroInterface[]>(this.url);
    }
  
    excluir(id: string): Observable<Object> {
      return this.httpClient.delete(`${this.url}/${id}`);
    }
  
    getCarro(id: string): Observable<CarroInterface> {
      return this.httpClient.get<CarroInterface>(`${this.url}/${id}`);
    }
  
    private adicionar(carro: CarroInterface)  {
      return this.httpClient.post(this.url, carro);
    }
  
    private atualizar(carro: CarroInterface) {
      return this.httpClient.put(`${this.url}/${carro.id}`, carro);
    }
  
    salvar(carro: CarroInterface) {
      if(carro.id) {
        return this.atualizar(carro);
      } else {
        return this.adicionar(carro);
      }
    }
  }