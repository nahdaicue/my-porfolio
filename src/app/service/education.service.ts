import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = 'backend-porfolio-production.up.railway.app/education/';

  constructor( private httpClient : HttpClient) { }

  public list():Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.URL + 'list');//creo que es list, mirar spring
  }

  public detail(id:number):Observable<Education>{
    return this.httpClient.get<Education>(this.URL + `detail/${id}`);//mirar los metodos
  }

  public save(education:Education):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', education);
  }

  public update(id:number, education:Education):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, education);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }
}