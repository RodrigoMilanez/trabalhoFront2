import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PilotoInterface } from "../piloto.model";
import { Observable, tap, map } from "rxjs";
import { Piloto } from "../pilotos.interface";

@Injectable({
  providedIn: 'root'
})
export class PilotoService {


  API_URL = 'http://localhost:3000/pilotos/';

  constructor(
      private httpClient: HttpClient
  ) { }

  save(piloto: any) {
      return this.httpClient
          .post<PilotoInterface>(this.API_URL, piloto);
  }

  getPiloto(id: string) {
      return this.httpClient.get<PilotoInterface>(this.API_URL + id);
  }

  getPilotos(): Observable<Piloto[]> {
      return this.httpClient
          .get<Piloto[]>(this.API_URL)
          .pipe(
              tap((data) => console.log('Data: ', data)),
              map((data) => {
                  return data.map(item => new Piloto(item))
              }),
              tap((data) => console.log('Data: ', data)),
          )
  }

  update(id: string, carro: any) {
      return this.httpClient.put(
          this.API_URL + id, carro
      )
  }

  remove(piloto: Piloto) {
      return this.httpClient.delete(
          this.API_URL + piloto.id
      )
  }
}