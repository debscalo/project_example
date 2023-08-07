import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { OperationComponent } from '../operation/operation.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  peopleForm: FormGroup;
  selectedImage!: File;

  constructor(
    private formB: FormBuilder,
    private peopleService: PeopleService,
    private dialog: MatDialog
  ) {
    this.peopleForm = this.formB.group({
      img: [''],
      nome: [''],
      cognome: [''],
      matricola: [''],
      citta: [''],
    });
  }

  printConsole(person: People) {
    console.log(person);
  }

  addPerson(person: People) {
    debugger;
    const formData = new FormData();
    formData.append('img', this.selectedImage);
    formData.append('nome', person.nome);
    formData.append('cognome', person.cognome);
    formData.append('matricola', person.matricola.toString());
    formData.append('citta', person.citta);
    
    this.peopleService.savePerson(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        if (error.status === 400) {
          this.openErrorDialog();
        } else {
          this.openConfirmDialog();
        }
      }
    );
    this.peopleForm.reset();
  }

  openErrorDialog(): void {
    this.dialog.open(ErrorDialogComponent, {});
  }

  openConfirmDialog(): void {
    this.dialog.open(ConfirmDialogComponent, {});
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
  }
}
