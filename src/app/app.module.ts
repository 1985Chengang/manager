import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderManageComponent } from './order/order-manage/order-manage.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderService } from './order/order.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OrderFilterPipe } from './order/order-filter.pipe';
import { MultiplePipe } from './pipe/multiple.pipe';
import { PipeComponent } from './demo/pipe/pipe.component';

const routeConfig: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'staff', component: ProfileComponent},
  { path: 'order', component: OrderManageComponent},
  { path: 'order/:id', component: OrderFormComponent},
  { path: 'eCommerce', component: OrderManageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/profile', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    SidebarComponent,
    OrderManageComponent,
    PreloaderComponent,
    ProfileComponent,
    DashboardComponent,
    OrderFormComponent,
    MultiplePipe,
    PipeComponent,
    OrderFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
