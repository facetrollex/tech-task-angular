import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazmatComponent } from './components/hazmat/hazmat.component';
import { SoapComponent } from './components/soap/soap.component';
import { PaperComponent } from './components/paper/paper.component';
import { DesinfectantComponent } from './components/desinfectant/desinfectant.component';

const routes: Routes = [
  { path: 'hazmat', component: HazmatComponent },
  { path: 'soap', component: SoapComponent },
  { path: 'paper', component: PaperComponent },
  { path: 'desinfectant', component: DesinfectantComponent },
  { path: '**', component: SoapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
