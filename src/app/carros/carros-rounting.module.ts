import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrosListaComponent } from "./component/carro-lista.page";

const routes: Routes = [
    {
      path: '',
      component: CarrosListaComponent
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
  export class CarrosPageRoutingModule {}