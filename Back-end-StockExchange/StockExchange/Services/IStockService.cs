using StockExchange.DTO;
using StockExchange.Models;

namespace StockExchange.Services
{
    public interface IStockService
    {
        List<StockModel> GetRealTimeStockData();
        List<StockModel> GetStockHistory(string symbol);
        OrderModel CreateOrder(OrderDTO order);
        List<OrderModel> GetOrders();
    }
}
