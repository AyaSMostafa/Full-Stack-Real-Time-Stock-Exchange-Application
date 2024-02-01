import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksDashboardComponent } from './components/stocks-dashboard/stocks-dashboard.component';
import { RealTimeUpdatesComponent } from './components/real-time-updates/real-time-updates.component';
import { OrderCreationComponent } from './components/order-creation/order-creation.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { StockService } from './services/stock.service';
import { OrderService } from './services/order.service';

const socketIoConfig: SocketIoConfig = { url: 'http://localhost:5209', options: {} }; // Adjust the URL based on your backend

const routes: Routes = [
  { path: '', redirectTo: '/stocks-dashboard', pathMatch: 'full' },
  { path: 'stocks-dashboard', component: StocksDashboardComponent },
  { path: 'real-time-updates', component: RealTimeUpdatesComponent },
  { path: 'order-creation-form', component: OrderCreationComponent },
  { path: 'orders-history', component: OrdersHistoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StocksDashboardComponent,
    RealTimeUpdatesComponent,
    OrderCreationComponent,
    OrdersHistoryComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(socketIoConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [StockService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
