import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionTwoRoutingModule } from './option-two-routing.module';
import { OptionTwoComponent } from './option-two.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OptionTwoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OptionTwoRoutingModule
  ]
})
export class OptionTwoModule { }
