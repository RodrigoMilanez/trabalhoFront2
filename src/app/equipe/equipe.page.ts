import { Component, OnInit } from '@angular/core';
import { EquipeInterface } from './interfaces/equipeModel';
import { AlertController, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { EquipeService } from './equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  styleUrls: ['./equipe.page.scss'],
})
export class EquipePage
  implements OnInit, ViewWillEnter, ViewDidLeave, ViewWillLeave, ViewDidLeave {
  equipes: EquipeInterface[] = [];

  constructor(
    private alertController: AlertController,
    private equipeService: EquipeService
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
    const observable = this.equipeService.getEquipes();
    observable.subscribe(
      (dados) => {
        this.equipes = dados;
      },/*
      (erro) => {
        console.error(erro);
        this.equipeService.error('Erro ao carregar listagem de autores');
      }*/
    );
  }

  /*confirmarExclusao(equipe: EquipeInterface) {
    this.alertController
      .create({
        header: 'Confirmação de exclusão',
        message: `Deseja excluir a equipe ${equipe.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.excluir(equipe),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alerta) => alerta.present());
  }

  private excluir(equipe: EquipeInterface) {
    if (equipe.id) {
      this.EquipeService.excluir(equipe.id).subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.alertService.error(`Não foi possível excluir o autor ${autor.nome}`);
        }
      );
    }
  }*/
}
