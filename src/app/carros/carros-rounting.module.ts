import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrosListaComponent } from "./component/carro-lista.page";
import { CarroCadastroComponent } from "./component/cadastro/carro-cadastro.component";

const routes: Routes = [
    {
      path: '',
      component: CarrosListaComponent
    },
    {
      path: 'novo',
      component: CarroCadastroComponent
    },
    {
      path: 'edicao/:id',
      component: CarroCadastroComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CarrosPageRoutingModule {}