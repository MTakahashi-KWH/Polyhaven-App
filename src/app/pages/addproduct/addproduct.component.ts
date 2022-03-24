import { Component, OnInit } from '@angular/core';
import { LibrarySectionModel } from 'src/app/splashelements/Library_section.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(product: LibrarySectionModel){
    console.log('you pressed submit');
    console.log(product);
  }
}
