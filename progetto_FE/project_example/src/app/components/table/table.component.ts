import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {


  constructor(private servicePeople: PeopleService){}
  
  people: any;
  ngOnInit(): void {
    this.servicePeople.getPeople().subscribe(
      response =>{
        this.people = response;
      }
    )
  }
}
