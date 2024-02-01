using Microsoft.AspNetCore.SignalR;

namespace StockExchangeAPI.Hubs
{
    public class StockHub : Hub
    {
        public async Task SendStockUpdate(string symbol, decimal price)
        {
            await Clients.All.SendAsync("ReceiveStockUpdate", symbol, price);
        }
    }
}
