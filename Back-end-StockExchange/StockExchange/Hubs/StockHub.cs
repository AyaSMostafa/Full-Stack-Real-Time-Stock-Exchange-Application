using Microsoft.AspNetCore.SignalR;

namespace StockExchange.Hubs
{
    public class StockHub : Hub
    {
        public async Task SendStockUpdate(string symbol, decimal price)
        {
            await Clients.All.SendAsync("ReceiveStockUpdate", symbol, price);
        }
    }
}
