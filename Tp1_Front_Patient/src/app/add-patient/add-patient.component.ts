import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
patient : Patient= {id:0,nom:'',prenom:'',age:0 , email:'',password:''}
  constructor(private patients:PatientService,private router:Router) { }

  ngOnInit(): void {
    
  }
  addPatientController(){
    this.patients.addPatientService(this.patient).subscribe(data=>{
      // console.log('patient added');
      this.router.navigate(['/listPatient']);
    })
  }

}
