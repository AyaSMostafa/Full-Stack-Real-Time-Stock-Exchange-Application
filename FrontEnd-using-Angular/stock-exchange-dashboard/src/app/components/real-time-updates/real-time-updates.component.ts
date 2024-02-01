import { Component , OnInit} from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-time-updates',
  templateUrl: './real-time-updates.component.html',
  styleUrl: './real-time-updates.component.less'
})
export class RealTimeUpdatesComponent {
  updates: any[] = [];

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    // Subscribe to real-time updates from the socket
    this.socket.fromEvent('update')
      .subscribe((update: any) => {
        this.updates.push(update);
        // Handle the updates as needed
      });
}}
