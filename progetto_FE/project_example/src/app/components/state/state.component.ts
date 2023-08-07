import { Component } from '@angular/core';
import { State } from 'src/app/redux/state.reducer';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {

  state: State = {
    value: 0
  }

  incrementa(): void{
    this.state.value += 1;
  }

  decrementa(): void{
    this.state.value -=1;
  }

  moltiplica(): void{
    this.state.value *= 3;
  }

  dividi(): void{
    this.state.value /=4;
  }

}
