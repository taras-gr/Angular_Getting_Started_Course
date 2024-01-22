import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  standalone: true,
  template: `
  <div><h1>{{pageTitile}}</h1>
    <div>My First Component</div>
  </div>
  `
})
export class AppComponent {
  pageTitile: string = 'Acme Product Management';
}