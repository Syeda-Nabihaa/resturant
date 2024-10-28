import { Component } from '@angular/core';
import { DummydataService } from 'src/app/services/dummydata.service';
interface menu {
  image:string
  name:string
  price:string
  description:string
}
interface product{
        name: string,
        price: string,
        description: string,
        img:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
data:menu[]=[];
offerData:menu[]=[];
productData:product[]=[];
constructor(private dummyData:DummydataService){}
ngOnInit():void{
  this.data = this.dummyData.food;
  this.offerData = this.dummyData.offer
  this.productData = this.dummyData.items
  console.log(this.data);
}

responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
];


}
