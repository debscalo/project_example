import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from '../models/people';
import { Observable } from 'rxjs';

const urlLocalHost = 'http://localhost:8080';
const getMapping = "/people";
const save = '/save'
const update = '/update'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(urlLocalHost+getMapping);
  }

  savePerson(person:FormData): Observable<People>{
    return this.http.post<any>(urlLocalHost + save, person)
  }

  updatePerson(person:People): Observable<People>{
    return this.http.put<any>(urlLocalHost+ update, person)
  }

  deletePerson(id: string):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(urlLocalHost+"/"+id);
  }
}
