import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksDashboardComponent } from './Components/stocks-dashboard/stocks-dashboard.component';
import { OrderCreationComponent } from './Components/order-creation/order-creation.component';
import { OrdersHistoryComponent } from './Components/orders-history/orders-history.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StockServiceService } from './services/services/stock-service.service';
import { OrderServiceService } from './services/services/order-service.service';
import { AuthService } from './services/services/auth.service';  // Import AuthService
import { WebsocketService } from './services/services/websocket.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RealTimeUpdatesComponent } from './Components/real-time-updates/real-time-updates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
const config: SocketIoConfig = { url: 'http://localhost:5209', options: {} };

const routes: Routes = [
  { path: '', redirectTo: '/stocks-dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks', component: StocksDashboardComponent },
  { path: 'stocks-dashboard', component: StocksDashboardComponent },
  { path: 'order-creation', component: OrderCreationComponent },
  { path: 'orders-history', component: OrdersHistoryComponent },
  { path: 'real-time-updates', component: RealTimeUpdatesComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
@NgModule({
  declarations: [
    AppComponent,
    StocksDashboardComponent,
    OrderCreationComponent,
    OrdersHistoryComponent,
    PageNotFoundComponent,
    RealTimeUpdatesComponent,
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    RouterOutlet, RouterLink, RouterLinkActive,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(), StockServiceService, OrderServiceService, WebsocketService,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
