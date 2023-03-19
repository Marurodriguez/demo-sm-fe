import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Components/agregar/agregar.component';

const routes: Routes = [
  {path:'', redirectTo:'agregar', pathMatch:'full'},

  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
