import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipePageRoutingModule } from './equipe-routing.module';

import { EquipePage } from './equipe.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipePageRoutingModule,
    HttpClientModule
  ],
  declarations: [EquipePage]
})
export class EquipePageModule {}
