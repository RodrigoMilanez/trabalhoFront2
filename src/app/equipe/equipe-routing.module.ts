import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipePage } from './component/equipe.page';
import { EquipeCadastroComponent } from './component/cadastro/equipe-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: EquipePage
  },
  {
    path: 'edicao/:id',
    component: EquipeCadastroComponent
  },
  {
    path: 'cadastro',
    component: EquipeCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule],
})
export class EquipePageRoutingModule {}
