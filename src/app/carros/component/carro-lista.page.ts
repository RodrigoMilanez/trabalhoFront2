import { Component, OnInit } from "@angular/core";
import { AlertController, ViewDidLeave, ViewWillEnter, ViewWillLeave } from "@ionic/angular";
import { CarroInterface } from "../carros.model";
import { CarroService } from "../service/carros.service";
import { AlertService } from "src/app/core/services";
import { Carro } from "../carros.interface";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-carros',
    templateUrl: './carro-lista.html',
  })
  export class CarrosListaComponent
    implements OnInit, ViewWillEnter, ViewDidLeave, ViewWillLeave, ViewDidLeave {
    
    searchTerm:string ="";

    public carros: Carro[] = [];
    private subscription!: Subscription;
  
    constructor(
      private alertController: AlertController,
      private carroService: CarroService,
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
      this.subscription = this.carroService
          .getCarros()
          .subscribe(
              (response) => {
                  console.log('Response: ', response);
                  this.carros = response;
              },
              (error) => {
                  console.error(error);
                  this.alertService.error(error);
              }
          );
  }
  
    excluir(carro: Carro) {
      this.alertController
          .create({
              header: 'Confirmação de exclusão',
              message: `Deseja excluir o livro ${carro.placa}?`,
              buttons: [
                  {
                      text: 'Sim',
                      handler: () => {
                          this.carroService
                              .remove(carro)
                              .subscribe({
                                  next: () => {
                                      this.carros = this.carros.filter(
                                          l => l.id !== carro.id
                                      )
                                  },
                                  error: (error) => {
                                      console.error(error);
                                      this.alertService.error('Não foi possível excluir o carro!');
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