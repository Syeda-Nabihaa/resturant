import { Component } from '@angular/core';
import { DummydataService } from 'src/app/services/dummydata.service';
interface menu {
  image:string
  name:string
  price:string
  description:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
data:menu[]=[];
constructor(private dummyData:DummydataService){}
ngOnInit():void{
  this.data = this.dummyData.food;
  console.log(this.data);
}
}
