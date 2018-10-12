import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderService } from '../order.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {

  private orders: Array<Order>;

  private nameFilter: FormControl = new FormControl();

  private keyword: String;

  constructor(public router: Router, private orderService: OrderService) {
    /*this.nameFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(orderCode => {
        this.searchByOrderCode(orderCode);
        this.keyword = orderCode;
        console.log(orderCode + 'gang');
      });*/
  }

  ngOnInit() {
    /*this.orders = [
      new Order('chengang' , '100000000' , 105 , 'wechat' , 'paid' ),
      new Order('chengang' , '100000001' , 106 , 'wechat' , 'waiting for paid' ),
      new Order('chengang' , '100000002' , 107 , 'wechat' , 'waiting for paid' ),
      new Order('chengang' , '100000003' , 108 , 'wechat' , 'delivery' ),
      new Order('chengang' , '100000005' , 109, 'wechat' , 'received' ),
    ];*/
    this.orders = this.orderService.getOrders();

    this.nameFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe( value => {
        this.keyword = value;
        console.log(this.keyword);
      });

  }

  create() {
    console.log('do create order...');
    this.router.navigateByUrl('/order/0');
  }

  update(order: Order) {
    console.log(order);
    this.router.navigateByUrl('/order/' + order.orderCode);
  }

  searchByOrderCode(orderCode: string) {
    console.log(orderCode);
  }
}

/*export class Order {
  constructor(public customer: string,
              public orderCode: string,
              public price: number,
              public paymentType: string,
              public status: string) {

  }
}*/
