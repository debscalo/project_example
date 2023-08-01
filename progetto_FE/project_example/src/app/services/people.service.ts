import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people';
import { Observable } from 'rxjs';

const urlLocalHost = 'http://localhost:8080';
const getMapping = "/people";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(urlLocalHost+getMapping);
  }

  savePerson(person:People): Observable<People>{
    return this.http.post<any>(urlLocalHost + getMapping, person)
  }
}
