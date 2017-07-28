import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { SalseDataService } from './salse-data.service';
import { SalseData2Service } from './salse-data2.service';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective,
    InitCapsPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [SalseDataService, SalseData2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
