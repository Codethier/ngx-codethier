import { NgModule } from '@angular/core';
import { NgxCodethierComponent } from './ngx-codethier.component';
import {NumberSpacerPipe} from "./pipes/number-spacer.pipe";
import {GeneralSubmitComponent} from "./generals/general-submit/general-submit.component";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputNumberModule} from "primeng/inputnumber";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    NgxCodethierComponent,
    NumberSpacerPipe,
    GeneralSubmitComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    NgxCodethierComponent
  ]
})
export class NgxCodethierModule { }
