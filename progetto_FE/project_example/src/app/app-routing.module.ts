import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { TableComponent } from './components/table/table.component';
import { StateComponent } from './components/state/state.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      { path: 'table', component: TableComponent },
      { path: 'state', component: StateComponent },
      { path: 'form', component: FormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
