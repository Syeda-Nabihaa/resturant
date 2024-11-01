import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = '';      
  @Input() buttonWidth: string = '';     
  @Input() buttonPx: string = '';        
  @Input() buttonIcon: string = '';      
  @Input() buttonPy: string = '';        
  @Input() buttonMt: string = '';        
  @Input() buttonMx: string = '';        
  @Input() buttonbgColor: string = '';   
  @Input() buttonColor: string = '';     
  @Input() textSize: string = '';     
}  
