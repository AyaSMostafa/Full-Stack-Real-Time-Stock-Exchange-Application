using StockExchangeAPI.Models;

namespace StockExchangeAPI.Services
{
    public interface IStockService
    {
        List<StockModel> GetRealTimeStockData();
        List<StockModel> GetStockHistory(string symbol);

        List<StockModel> GetStockHistory2(string symbol);
        OrderModel CreateOrder(OrderModel order);
        List<OrderModel> GetOrders();
    }
}
