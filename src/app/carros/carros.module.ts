import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CarrosPageRoutingModule } from "./carros-rounting.module";
import { CarrosListaComponent } from "./component/carro-lista.page";
import { CarroCadastroComponent } from "./component/cadastro/carro-cadastro.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      IonicModule,
      CarrosPageRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    declarations: [CarrosListaComponent, CarroCadastroComponent]
  })
  export class CarrosPageModule {}