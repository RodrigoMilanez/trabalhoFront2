import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarroInterface } from "../carros.model";
import { Observable, map, tap } from "rxjs";
import { Carro } from "../carros.interface";

@Injectable({
  providedIn: 'root'
})
export class CarroService {


  API_URL = 'http://localhost:3000/carros/';

  constructor(
      private httpClient: HttpClient
  ) { }

  save(livro: any) {
      return this.httpClient
          .post<CarroInterface>(this.API_URL, livro);
  }

  getCarro(id: string) {
      return this.httpClient.get<CarroInterface>(this.API_URL + id);
  }

  getCarros(): Observable<Carro[]> {
      return this.httpClient
          .get<Carro[]>(this.API_URL)
          .pipe(
              tap((data) => console.log('Data: ', data)),
              map((data) => {
                  return data.map(item => new Carro(item))
              }),
              tap((data) => console.log('Data: ', data)),
          )
  }

  update(id: string, carro: any) {
      return this.httpClient.put(
          this.API_URL + id, carro
      )
  }

  remove(carro: Carro) {
      return this.httpClient.delete(
          this.API_URL + carro.id
      )
  }
}