import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummydataService {
  
    items = [
      {
        name: "Vegetable Cheese Burger",
        price: "$14.99",
        description: "Vegetable cheese burger",
        img:"../../assets/images/burger2.png"
      },
      {
        name: "Vegetable Cheese Burger",
        price: "$14.99",
        description: "Vegetable cheese burger",
        img:"../../assets/images/burger2.png"
      },
      {
        name: "Vegetable Cheese Burger",
        price: "$14.99",
        description: "Vegetable cheese burger",
        img:"../../assets/images/burger2.png"
      },
      {
        name: "Vegetable Cheese Burger",
        price: "$14.99",
        description: "Vegetable cheese burger",
        img:"../../assets/images/burger2.png"
      }
    ]
    
    food = [
      {
        image: "../../assets/images/img1.png",
        name: "Delicious Rice Bowl with Vegetables",
        price: "$14.99",
        description: "Delicious Rice Bowl with Vegetables order your yummy food now"
      },
      {
        image: "../../assets/images/img2.png",
        name: "Delicious Rice Bowl with Vegetables",
        price: "$14.99",
        description: "Delicious Rice Bowl with Vegetables order your yummy food now"
      },
      {
        image: "../../assets/images/img3.png",
        name: "Delicious Rice Bowl with Vegetables",
        price: "$14.99",
        description: "Delicious Rice Bowl with Vegetables order your yummy food now"
      },
      {
        image: "../../assets/images/pasta.png",
        name: "Delicious Rice Bowl with Vegetables",
        price: "$14.99",
        description: "Delicious Rice Bowl with Vegetables order your yummy food now"
      }
    ]
  
  

   
  constructor() { }
}
