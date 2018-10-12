import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  private orders: Order[] = [
    new Order('chengang' , '100000000' , 105 , 'wechat' , 'paid' ),
    new Order('chengang' , '200000001' , 106 , 'wechat' , 'waiting for paid' ),
    new Order('chengang' , '300000002' , 107 , 'wechat' , 'waiting for paid' ),
    new Order('chengang' , '400000003' , 108 , 'wechat' , 'delivery' ),
    new Order('chengang' , '500000005' , 109, 'wechat' , 'received' ),
  ];

  getOrders(): Order[] {
    return this.orders;
  }

  getOrder(orderCode: string): Order {
    let queryOrder = this.orders.find(order => order.orderCode === orderCode);
    if ( !queryOrder) {
      queryOrder = new Order('' , '' , 0 , '' , '' );
    }
    return queryOrder;
  }
}

export class Order {
  constructor(public customer: string,
              public orderCode: string,
              public price: number,
              public paymentType: string,
              public status: string) {

  }
}

