import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CarrosPageRoutingModule } from "./carros-rounting.module";
import { CarrosListaComponent } from "./component/carro-lista.page";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      IonicModule,
      CarrosPageRoutingModule,
      HttpClientModule,
    ],
    declarations: [CarrosListaComponent/*, AutoresCadastroComponent*/]
  })
  export class CarrosPageModule {}