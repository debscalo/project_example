import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';


import { PeopleComponent } from './components/people/people.component';
import { TableComponent } from './components/table/table.component';
import { StateComponent } from './components/state/state.component';
import { FormComponent } from './components/form/form.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/state.reducer';
import { OperationComponent } from './components/operation/operation.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    TableComponent,
    StateComponent,
    FormComponent,
    OperationComponent,
    DialogComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreDevtoolsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    StoreModule.forRoot({})
    
  ],
  providers: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
