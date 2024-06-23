import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertService } from "src/app/core/services";
import { EquipeService } from "../../equipe.service";
import { EquipeInterface } from "../../interfaces/equipeModel";

@Component({
    selector: 'app-equipe-cadastro',
    templateUrl: '/equipe-cadastro.component.html',
  })
  export class EquipeCadastroComponent implements OnInit {
    equipeId: string | null;
    equipeForm: FormGroup;
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private equipeService: EquipeService,
      private alertService: AlertService,
      private router: Router
    ) {
      this.equipeId = null;
      this.equipeForm = this.createForm();
    }
  
    ngOnInit() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.equipeId = id;
        this.equipeService.getEquipe(this.equipeId).subscribe((equipe) => {
          this.equipeForm = this.createForm(equipe);
        });
      }
    }
  
    private createForm(equipe?: EquipeInterface) {
      return new FormGroup({
        nome: new FormControl(equipe?.nome || '', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(150),
        ]),
        origem: new FormControl(equipe?.origem || '', [
          Validators.required
        ]),
        dataFundacao: new FormControl(
          equipe?.dataFundacao || new Date().toISOString()
        ),
        numero: new FormControl(
          equipe?.numero || Number,
          Validators.required
        ),
      });
    }
  
    salvar() {
      const equipe: EquipeInterface = {
        ...this.equipeForm.value,
      };
      if (this.equipeId) {
        equipe.id = this.equipeId;
      }
      this.equipeService.salvar(equipe).subscribe(
        () => this.router.navigate(['equipe']),
        (erro) => {
          console.error(erro);
          this.alertService.error(
            `Não foi possível salvar a equipe: ${erro.error.message}`
          );
        }
      );
    }
  
    get nome() {
      return this.equipeForm.get('nome');
    }
  }