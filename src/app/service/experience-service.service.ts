import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

const BASE_URL = 'backend-porfolio-production.up.railway.app/experience/';

@Injectable({
  providedIn: 'root'
})
export class ExperienceServiceService {

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(BASE_URL + 'lista');
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(BASE_URL + `detail/${id}`);
  }

  public save(experience: Experience): Observable<Experience> {
    return this.httpClient.post<Experience>(BASE_URL + 'create', experience);
  }
  

  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(BASE_URL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(BASE_URL + `delete/${id}`);
  }
}
