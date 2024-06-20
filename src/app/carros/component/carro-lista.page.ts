import { Component, OnInit } from "@angular/core";
import { AlertController, ViewDidLeave, ViewWillEnter, ViewWillLeave } from "@ionic/angular";
import { CarroInterface } from "../carros.model";
import { CarroService } from "../service/carros.service";


@Component({
    selector: 'app-carros',
    templateUrl: './carro-lista.html',
  })
  export class CarrosListaComponent
    implements OnInit, ViewWillEnter, ViewDidLeave, ViewWillLeave, ViewDidLeave {
    carros: CarroInterface[] = [];
  
    constructor(
      private alertController: AlertController,
      private carroService: CarroService,
      private alertService: CarroService
    ) { }
  
    ionViewWillEnter() {
      console.log('ionViewWillEnter');
      this.listar();
    }
  
    ionViewDidEnter() {
      console.log('ionViewDidEnter');
    }
  
    ionViewWillLeave() {
      console.log('ionViewWillLeave');
    }
  
    ionViewDidLeave() {
      console.log('ionViewDidLeave');
    }
  
    ngOnInit() { }
  
    listar() {
      const observable = this.carroService.getCarros();
      observable.subscribe(
        (dados) => {
          this.carros = dados;
          console.log(dados)
        },/*
        (erro) => {
          console.error(erro);
          this.alertService.error('Erro ao carregar listagem de autores');
        }*/
      );
    }
  
    confirmarExclusao(carro: CarroInterface) {
      this.alertController
        .create({
          header: 'Confirmação de exclusão',
          message: `Deseja excluir o autor ${carro.placa}?`,
          buttons: [
            {
              text: 'Sim',
              handler: () => this.excluir(carro),
            },
            {
              text: 'Não',
            },
          ],
        })
        .then((alerta) => alerta.present());
    }
  
    private excluir(carro: CarroInterface) {
      if (carro.id) {
        this.carroService.excluir(carro.id).subscribe(
          () => this.listar())
      }
    }
  }