import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './patient';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   
  })
};
@Injectable({
  providedIn: 'root'
})
export class PatientService {
url=environment.baseUrl
  token: any;

  constructor(private httpClient:HttpClient) {
   }
   
  
   getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.url}/patient`)
   }
   deletePatient(id:number):Observable<Patient>{
    return this.httpClient.delete<Patient>(`${this.url}/patient/${id}`)
   }
   addPatientService(patient:Patient):Observable<any>{
    return this.httpClient.post<any>(`${this.url}/patient/add`,patient,httpOptions)
   }

   getPatientByIdService(id:number):Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.url}/patient/${id}`)
   }
   updatePatientService(id:number, patient:Patient):Observable<Patient[]>{
    return this.httpClient.patch<Patient[]>(`${this.url}/patient/${id}`,patient,httpOptions)
   }

login(email:string,password:string):Observable<Patient>{
  return this.httpClient.post<Patient>(`${this.url}/patient`,{email,password},httpOptions)
}
isLogin():boolean{
  this.token=localStorage.getItem('role')
  if (this.token==='admin') {
    return true
    
  }
  else {
    return false
  }



}


}

