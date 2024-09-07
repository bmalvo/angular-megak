import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dollar-converter',
  standalone: true,
  imports: [],
  templateUrl: './dollar-converter.component.html',
  styleUrl: './dollar-converter.component.scss'
})
export class DollarConverterComponent {

  @Input()
  amount: number = 1
  @Input()
  currency: string = ''
  @Input()
  rate: number  = 1
 

  convert() {

    return (this.amount * this.rate).toFixed(2);
  }

}
