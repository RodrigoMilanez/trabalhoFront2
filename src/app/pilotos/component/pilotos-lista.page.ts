import { Component, OnInit } from "@angular/core";
import { AlertController, ViewDidLeave, ViewWillEnter, ViewWillLeave } from "@ionic/angular";
import { PilotoInterface } from "../piloto.model";
import { PilotoService } from "../service/pilotos.service";

@Component({
    selector: 'app-pilotos',
    templateUrl: './piloto-lista.html',
  })
  export class PilotosListaComponent
    implements OnInit, ViewWillEnter, ViewDidLeave, ViewWillLeave, ViewDidLeave {
    pilotos: PilotoInterface[] = [];
  
    constructor(
      private alertController: AlertController,
      private pilotoService: PilotoService,
      private alertService: PilotoService
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
      const observable = this.pilotoService.getPilotos();
      observable.subscribe(
        (dados) => {
          this.pilotos = dados;
          console.log(dados)
        },/*
        (erro) => {
          console.error(erro);
          this.alertService.error('Erro ao carregar listagem de autores');
        }*/
      );
    }
  
    confirmarExclusao(piloto: PilotoInterface) {
      this.alertController
        .create({
          header: 'Confirmação de exclusão',
          message: `Deseja excluir o autor ${piloto.nome}?`,
          buttons: [
            {
              text: 'Sim',
              handler: () => this.excluir(piloto),
            },
            {
              text: 'Não',
            },
          ],
        })
        .then((alerta) => alerta.present());
    }
  
    private excluir(piloto: PilotoInterface) {
      if (piloto.id) {
        this.pilotoService.excluir(piloto.id).subscribe(
          () => this.listar())
      }
    }
  }