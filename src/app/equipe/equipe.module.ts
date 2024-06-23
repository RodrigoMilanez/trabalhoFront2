import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipePageRoutingModule } from './equipe-routing.module';

import { EquipePage } from './component/equipe.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EquipeCadastroComponent } from './component/cadastro/equipe-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [EquipePage, EquipeCadastroComponent]
})
export class EquipePageModule {}
