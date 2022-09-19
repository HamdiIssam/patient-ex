import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.scss']
})
export class UpdatepatientComponent implements OnInit {
patient!:Patient[]
  constructor(private PatientService:PatientService, private activatedRoute: ActivatedRoute,
              private router:Router) { }
id!:number
  ngOnInit(): void {
    this.patient=[{id:0,nom:'',prenom:'',age:23 , email:'',password:''}]
    this.id=(this.activatedRoute.snapshot.params['id'])
  this.getPatientById(this.id)
  }
  
  getPatientById(id:number){
this.PatientService.getPatientByIdService(id).subscribe(data=>{
  this.patient=data
  console.log('id recuperé',this.patient);
  

})
  }
  updatePatient(){
    this.PatientService.updatePatientService(this.id, this.patient[0]).subscribe(data=>{
      this.patient=data
      this.router.navigate(['/listPatient']);
    })
  }
}
