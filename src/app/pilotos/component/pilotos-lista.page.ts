import { Component, OnInit } from "@angular/core";
import { AlertController, ViewDidLeave, ViewWillEnter, ViewWillLeave } from "@ionic/angular";
import { Piloto } from "../pilotos.interface";
import { Subscription } from "rxjs";
import { PilotoService } from "../service/pilotos.service";
import { AlertService } from "src/app/core/services";



@Component({
    selector: 'app-pilotos',
    templateUrl: './piloto-lista.html',
  })
  export class PilotosListaComponent
    implements OnInit, ViewWillEnter, ViewDidLeave, ViewWillLeave, ViewDidLeave {
    
    searchTerm:string ="";

    public pilotos: Piloto[] = [];
    private subscription!: Subscription;
  
    constructor(
      private alertController: AlertController,
      private pilotoService: PilotoService,
      private alertService: AlertService
    ) { }
  ionViewDidLeave(): void {
    throw new Error("Method not implemented.");
  }
  ionViewWillLeave(): void {
    throw new Error("Method not implemented.");
  }
  
    ionViewWillEnter(): void {
      this.listagem();
  }

  ngOnInit(): void {
              
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  listagem() {
      this.subscription = this.pilotoService
          .getPilotos()
          .subscribe(
              (response) => {
                  console.log('Response: ', response);
                  this.pilotos = response;
              },
              (error) => {
                  console.error(error);
                  this.alertService.error(error);
              }
          );
  }
  
    excluir(piloto: Piloto) {
      this.alertController
          .create({
              header: 'Confirmação de exclusão',
              message: `Deseja excluir o livro ${piloto.nome}?`,
              buttons: [
                  {
                      text: 'Sim',
                      handler: () => {
                          this.pilotoService
                              .remove(piloto)
                              .subscribe({
                                  next: () => {
                                      this.pilotos = this.pilotos.filter(
                                          l => l.id !== piloto.id
                                      )
                                  },
                                  error: (error) => {
                                      console.error(error);
                                      this.alertService.error('Não foi possível excluir o piloto!');
                                  }
                              });;
                      },
                  },
                  {
                      text: 'Não',
                  },
              ],
          })
          .then((alerta) => alerta.present());
  }
  }