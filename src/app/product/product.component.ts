import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product', // selector, i can use this value as a html tag
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = {
    name: 'PS4 Slim 240 GB',
    value: 10.5,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
