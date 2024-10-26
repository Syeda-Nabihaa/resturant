import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  @Input ({required:true}) img:string=''
  @Input ({required:true}) name:string=''
  @Input ({required:true}) price:string=''
  @Input ({required:true}) description:string=''

}
