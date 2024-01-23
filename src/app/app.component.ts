import { Component } from "@angular/core";
import { ProductListComponent } from "./products/product-list.component";

@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
  <div><h1>{{pageTitile}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitile: string = 'Acme Product Management';
}