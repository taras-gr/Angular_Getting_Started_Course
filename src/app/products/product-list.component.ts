import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IProduct } from "./product";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { StarComponent } from "../shared/star.component";

@Component({
    selector: 'pm-products',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, FormsModule, ConvertToSpacesPipe, StarComponent]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity description",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-1123",
      "releaseDate": "May 18, 2022",
      "description": "Curved steel tool",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = 'cart';
  }
}