import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionOneRoutingModule } from './option-one-routing.module';
import { OptionOneComponent } from './option-one.component';
import { HttpClientModule } from '@angular/common/http';
import { OptionOneService } from './option-one.service';


@NgModule({
  declarations: [
    OptionOneComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OptionOneRoutingModule
  ],
  providers: [OptionOneService]
})
export class OptionOneModule { }
