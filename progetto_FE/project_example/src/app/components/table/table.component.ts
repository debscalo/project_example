import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  

  displayedColumns: string[] = ['nome', 'cognome', 'matricola', 'citta'];
  
  clickedRows = new Set<People>();


  constructor(private servicePeople: PeopleService){}
  

  people: any;

  dataSource: People[] = [];
  
  ngOnInit(): void {
    this.servicePeople.getPeople().subscribe(
      response =>{
        this.people = response as People[];
        this.dataSource = this.people
      }
    )
  }

  


  columnsToDisplay = ['Nome', 'Cognome', 'Matricola', 'Citta'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: People | null | undefined;
}
