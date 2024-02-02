// websocket.service.ts

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {

  constructor(private socket: Socket) { }

  // Connect to the WebSocket
  connect() {
    this.socket.connect();
  }

  // Disconnect from the WebSocket
  disconnect() {
    this.socket.disconnect();
  }

  // Listen for real-time stock updates
  onStockUpdate() {
    return this.socket.fromEvent('ReceiveStockUpdate');
  }

  // Send an order to the server
  sendOrder(order: any) {
    this.socket.emit('SendOrder', order);
  }
}
