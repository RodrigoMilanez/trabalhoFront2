import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PilotosListaComponent } from "./component/pilotos-lista.page";
import { PilotoCadastroComponent } from "./component/cadastro/piloto-cadastro.component";
//import { PilotoCadastroComponent } from "./component/cadastro/piloto-cadastro.component";

const routes: Routes = [
    {
      path: '',
      component: PilotosListaComponent
    },
   {
      path: 'novo',
      component: PilotoCadastroComponent
    }]/*,
    {
      path: 'edicao/:id',
      component: PilotoCadastroComponent
    }
  ];*/
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PilotosPageRoutingModule {}