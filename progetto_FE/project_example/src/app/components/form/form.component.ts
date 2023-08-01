import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  peopleForm: FormGroup;

  constructor(private formB: FormBuilder, private servicePeople:PeopleService){
    this.peopleForm = this.formB.group({
      nome: [''],
      cognome: [''],
      matricola: [''],
      citta: ['']
  });
  }

  printConsole(person:People){
      console.log(person)
    
  }

}
