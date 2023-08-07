
import {Component} from '@angular/core';

import {MatDrawerMode} from '@angular/material/sidenav';



@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent{

  mode = 'over' as MatDrawerMode;

}


