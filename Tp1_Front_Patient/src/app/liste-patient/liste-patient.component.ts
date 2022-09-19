import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss']
})
export class ListePatientComponent implements OnInit {

  constructor(private patientService:PatientService) { }
listePatient:Patient[]=[]

  ngOnInit(): void {
this.getallpatient()

  }
  getallpatient(){
    this.patientService.getPatients().subscribe(data=>{
      this.listePatient=data 
      console.log (this.listePatient)
    })
  }
delete (id:number){
  this.patientService.deletePatient(id).subscribe(data=>{

    this.getallpatient()
  }

  )   
}
}
