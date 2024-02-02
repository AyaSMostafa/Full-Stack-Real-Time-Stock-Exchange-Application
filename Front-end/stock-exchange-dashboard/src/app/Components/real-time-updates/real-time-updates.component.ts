import { Component,OnInit, OnDestroy} from '@angular/core';
import { StockServiceService } from '../../services/services/stock-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-real-time-updates',
  templateUrl: './real-time-updates.component.html',
  styleUrl: './real-time-updates.component.css'
})
export class RealTimeUpdatesComponent  implements OnInit, OnDestroy {
  updateData: any[] = [];
  private subscription: Subscription | undefined;
  constructor(private stockService: StockServiceService) { }

  ngOnInit(): void {
    this.subscribeToUpdates();
  }

  private subscribeToUpdates(): void {
    // Use WebSocket to receive real-time updates
    const socket = new WebSocket('ws://localhost:5209/stockHub'); // Adjust the WebSocket URL

    socket.onmessage = (event) => {
      const update = JSON.parse(event.data);
      this.updateData.push(update);
    };

    this.subscription = this.stockService.getRealTimeStockData().subscribe(
      data => {
        this.updateData = data;
      },
      error => {
        console.error('Error getting real-time updates:', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the real-time updates subscription
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
