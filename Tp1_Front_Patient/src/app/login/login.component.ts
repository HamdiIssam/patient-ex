import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email!:string;
password!:string;
patient !:Patient
  constructor(private loginService:PatientService , private router:Router) { }

  ngOnInit(): void {
  }

  login(email:string,password:string){
    this.loginService.login(email,password).subscribe(data=>{
  this.patient=data
  localStorage.setItem('role','admin')
  this.router.navigate(['/listPatient'])



    })
  }
}