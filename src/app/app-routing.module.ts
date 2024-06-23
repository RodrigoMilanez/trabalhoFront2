import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EquipePage } from './equipe/component/equipe.page';
import { EquipePageModule } from './equipe/equipe.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'equipe',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./equipe/equipe.module').then( m => m.EquipePageModule)
  },
  {
    path: 'pilotos',
    loadChildren: () => import('./pilotos/pilotos.module').then( m => m.PilotosPageModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./carros/carros.module').then( m => m.CarrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
