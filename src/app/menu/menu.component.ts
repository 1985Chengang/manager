import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menus: Array<Menu>;
  currentMenuId: number;
  constructor(public router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu( 1 , '陈纲', 'staff', '', '', 5, [
        new Menu( 11, '个人信息', 'profile',  '', '', 0, []),
        new Menu( 12, '帐户', 'balance',  '', '', 0 , []),
        new Menu( 13, '邮件', 'inbox',  '' , '', 0 ,  []),
        new Menu( 14, '设置', 'system',  '', '', 0 ,  []),
        new Menu( 15, '登出', 'logout', '', '', 0 ,  [])
      ]),
      new Menu( 2, '仪表盘', 'dashboard', 'mdi-av-timer' , '', 3 , [
        new Menu( 21, '仪表盘1', 'dashboard1', '', '1', 0 ,  []),
        new Menu( 22, '仪表盘2', 'dashboard2', '', '2', 0 ,  []),
        new Menu( 23, '仪表盘3', 'dashboard3', '', '3', 0 ,  [])
      ]),
      new Menu( 3, '电商', 'eCommerce', 'mdi-cart-outline', '' , 6 , [
        new Menu( 31, '产品', 'product', '', 'P', 0 , []),
        new Menu( 32, '订单', 'order' , '', 'PO', 0 ,  []),
        new Menu( 36, '结算', 'checkout', '', 'PC', 0 ,  []),
        new Menu( 33, '购物车', 'cart', '', 'PC', 0 ,  []),
        new Menu( 34, '产品编辑', 'productEdit', '', 'PE', 0 , []),
        new Menu( 35, '产品详细', 'productDetail', '', 'PD', 0 , [])
      ])
    ];
    this.currentMenuId = 1;
    console.log(this.menus);
  }

  nav ( menu: Menu) {
    this.router.navigateByUrl(menu.linker);
    this.currentMenuId = menu.id;
    console.log('currentMenuId= ' + this.currentMenuId);
  }
}

export class Menu {

  constructor(public id: number,
              public name: string,
              public linker: string,
              public icon: string,
              public abbr: string,
              public submenuaccount: number,
              public subMenu: Array<Menu>) {
  }
}


