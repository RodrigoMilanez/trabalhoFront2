import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PilotosListaComponent } from "./component/pilotos-lista.page";

const routes: Routes = [
    {
      path: '',
      component: PilotosListaComponent
    },
   /* {
      path: 'cadastro',
      component: AutoresCadastroComponent
    },
    {
      path: 'edicao/:id',
      component: AutoresCadastroComponent
    }*/
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PilotosPageRoutingModule {}