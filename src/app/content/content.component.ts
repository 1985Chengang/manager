import { Component, OnInit } from '@angular/core';
import {NavigationCancel, NavigationEnd, Router} from '@angular/router';
import { filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTile = '';

  pageDesc = '';

  constructor(public router: Router) {
    router.events.pipe(
      filter( event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if ( event.url === '/dashboard') {
        this.pageTile = '仪表盘';
        this.pageDesc = '仪表盘';
      } else if ( event.url.startsWith('/staff')) {
        this.pageTile = '个人信息';
        this.pageDesc = '个人信息';
      } else if ( event.url.startsWith('/profile')) {
        this.pageTile = '个人信息';
        this.pageDesc = '个人信息';
      } else if ( event.url.startsWith('/order')) {
        this.pageTile = '电商/订单';
        this.pageDesc = '电商/订单';
      } else if ( event.url.startsWith('/eCommerce')) {
        this.pageTile = '电商/订单';
        this.pageDesc = '电商/订单';
      }
    });
  }

  ngOnInit() {
  }

}
