import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {

  @Input()
  name: string = '';
  @Input()
  users: string[] = [];
  @Input()
  amount: number = 23;


  value = 'zygfryd'

  getValue() {

    return (
      this.value
    )

  };

}
