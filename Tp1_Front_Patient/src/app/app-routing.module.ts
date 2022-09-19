import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'listPatient',component:ListePatientComponent,canActivate:[LoginGuard]},
  {path:'add',component:AddPatientComponent},
  {path:'update/:id',component:UpdatepatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
