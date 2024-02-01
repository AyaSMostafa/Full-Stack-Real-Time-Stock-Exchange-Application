import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StocksDashboardComponent } from './components/stocks-dashboard/stocks-dashboard.component';
import { OrderCreationComponent } from './components/order-creation/order-creation.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { RealTimeUpdatesComponent } from './components/real-time-updates/real-time-updates.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks-dashboard', pathMatch: 'full' },
  { path: 'stocks-dashboard', component: StocksDashboardComponent },
  { path: 'real-time-updates', component: RealTimeUpdatesComponent },
  { path: 'order-creation-form', component: OrderCreationComponent },
  { path: 'orders-history', component: OrdersHistoryComponent },
];

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule, 
    RouterModule.forRoot(routes)
  ],exports: [RouterModule],
})
export class AppRoutingModule { }
