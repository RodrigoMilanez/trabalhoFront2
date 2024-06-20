import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PilotosPageRoutingModule } from "./pilotos-rounting.module";
import { PilotosListaComponent } from "./component/pilotos-lista.page";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      IonicModule,
      PilotosPageRoutingModule,
      HttpClientModule,
    ],
    declarations: [PilotosListaComponent/*, AutoresCadastroComponent*/]
  })
  export class PilotosPageModule {}