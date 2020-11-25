import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {v4 as uuid} from 'uuid';
import { Order } from '../shared/interfaces/order';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products =
  [
    "Americano",
    "capuccino",
    "Mocha",
    "Flat White",
    "Latte",
    "Espresso",
    "Machiato",
    "Hot Chocolate",
    "Tea"
  ];
  orderProducts:string[];
  formGroup:FormGroup;

  constructor(private fb : FormBuilder, private os: OrderService)
  {
    this.orderProducts  = [];
  }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group({
      name:'',
      table:'',
    });
  }

  addToOrder(p:string)
  {
    this.orderProducts.push(p);
  }
  removeFromOrder(index:number)
  {
    this.orderProducts.splice(index,1);
  }

  submit(fg : FormGroup)
  {
    let l_order:Order =
    {
      id:       uuid(),
      name:     fg.get('name').value,
      table:    fg.get('table').value,
      products: this.orderProducts
    }

    this.os.create(l_order).subscribe(e=>
      {
        this.formGroup.reset();
        this.orderProducts=[];
      });
  }
}
