import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PilotosPageRoutingModule } from "./pilotos-rounting.module";
import { PilotosListaComponent } from "./component/pilotos-lista.page";
import { PilotoCadastroComponent } from "./component/cadastro/piloto-cadastro.component";
//import { PilotoCadastroComponent } from "./component/cadastro/piloto-cadastro.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      IonicModule,
      PilotosPageRoutingModule,
      HttpClientModule,
    ],
    declarations: [PilotosListaComponent, PilotoCadastroComponent]
  })
  export class PilotosPageModule {}