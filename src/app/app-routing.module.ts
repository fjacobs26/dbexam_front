import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'option_one', loadChildren: () => import('./option-one/option-one.module').then(m => m.OptionOneModule) },
  { path: 'option_two', loadChildren: () => import('./option-two/option-two.module').then(m => m.OptionTwoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
