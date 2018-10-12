import { Component, OnInit } from '@angular/core';
import {Order, OrderService} from '../order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  formModel: FormGroup;
  order: Order;
  constructor(private routeInfo: ActivatedRoute,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    const orderCode = this.routeInfo.snapshot.params['id'];
    /*this.order = new Order('chengang' , '100000006' , 105 , 'wechat' , 'paid' );*/
    this.order = this.orderService.getOrder(orderCode );

    const fb = new FormBuilder();
    this.formModel = fb.group({
      customer: [this.order.customer, [Validators.required, Validators.minLength(3)]],
      orderCode: [this.order.orderCode, [Validators.required, Validators.minLength(9)]],
      price: [this.order.price, Validators.required],
      paymentType: [this.order.paymentType, Validators.required],
      status: [this.order.status, Validators.required]
    });
  }

  save() {
    /*this.router.navigateByUrl('/order');*/
    console.log(this.formModel.value);
  }

  cancel() {
    this.router.navigateByUrl('/order');
  }

}
