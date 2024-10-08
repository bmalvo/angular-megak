import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NameDisplayerComponent } from './name-displayer/name-displayer.component';
import { ParentComponent } from './parent/parent.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DollarConverterComponent } from './dollar-converter/dollar-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, NameDisplayerComponent, ParentComponent, WelcomeComponent, DollarConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'HelloApp';

  users: string[] = ['A', 'B', 'C', 'D', 'E']

  getName() {
      
    return 'Stefka';
  }
}
