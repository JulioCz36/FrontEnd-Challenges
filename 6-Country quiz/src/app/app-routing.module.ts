import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntaCapitalComponent } from './components/pregunta-capital/pregunta-capital.component';


const routes: Routes = [
  {path:'', component: PreguntaCapitalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
