import { NgModule } from '@angular/core';
import {CodethierNumberSpacerPipe} from "./pipes/number-spacer.pipe";
import {CodethierGeneralSubmitComponent} from "./generals/general-submit/general-submit.component";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    CodethierNumberSpacerPipe,
    CodethierGeneralSubmitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    CodethierNumberSpacerPipe,
    CodethierGeneralSubmitComponent,
  ]
})
export class NgxCodethierModule { }
