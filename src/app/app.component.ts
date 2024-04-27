import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gym_website';

  products = [
    {productId:1, productName:"Iphone"},
    {productId:2, productName:"Iphone"},
    {productId:3, productName:"Iphone"},
    {productId:4, productName:"Iphone"},
    {productId:5, productName:"Iphone"}
  ]

constructor() {
    // Called first time before the ngOnInit()
 }

 ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges() 
 }


}
