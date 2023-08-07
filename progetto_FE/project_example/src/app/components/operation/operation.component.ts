import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit, AfterViewInit {
  peopleForm: FormGroup;
  peopleUpdateForm: FormGroup;

  data!: People[];

  displayedColumns: string[] = [
    'img',
    'nome',
    'cognome',
    'matricola',
    'citta',
    'operazioni',
  ];

  constructor(
    private http: HttpClient,
    private peopleService: PeopleService,
    private formB: FormBuilder,
    public dialog: MatDialog,
    private dialogRes: DialogComponent
  ) {
    this.dialogRes = dialogRes;
    this.peopleForm = this.formB.group({
      nome: [''],
      cognome: [''],
      matricola: [''],
      citta: [''],
    });

    this.peopleUpdateForm = this.formB.group({
      id: [''],
      nome: [''],
      cognome: [''],
      matricola: [''],
      citta: [''],
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<People>(this.data);

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((response: any) => {
      this.data = response;
      this.dataSource.data = this.data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  mode: boolean = false;
  updateMode: boolean = false;

  setMode() {
    if (this.mode) {
      this.mode = false;
    } else {
      this.mode = true;
    }
  }

  setUpdateMode() {
    if (this.updateMode) {
      this.updateMode = false;
    } else {
      this.updateMode = true;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  formData: any;

  showForm(data: People) {
    this.formData = data;

    this.peopleUpdateForm.patchValue({
      id: data.id,
      nome: data.nome,
      cognome: data.cognome,
      matricola: data.matricola,
      citta: data.citta,
    });
  }

  modifyPerson(person: People) {
    this.peopleService.updatePerson(person).subscribe((response: any) => {
      console.log(response);
      this.reload();
    });
  }

  deletePerson(id: string) {
    
      this.peopleService.deletePerson(id).subscribe((response) => {
        console.log(response);
        this.peopleService.getPeople().subscribe((data: any) => {
          this.data = data;
          this.dataSource.data = this.data;
        });
      });
   
  }

  openDialog(id: string) {
    debugger;
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm'){
        this.deletePerson(id);
      }
    });
  }

  download(img: any) {
    debugger;
    const imgUrl = img;
    const imgName = 'image';
    this.http
      .get(imgUrl, { responseType: "blob" as "json" })
      .subscribe((res: any) => {
        const file = new Blob([res], { type: res.type });

        const blob = window.URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = blob;
        link.download = imgName;

        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          })
        );

        setTimeout(() => {
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100);
      });
    
  }

  

  reload(): void {
    window.location.reload();
  }
  
}
