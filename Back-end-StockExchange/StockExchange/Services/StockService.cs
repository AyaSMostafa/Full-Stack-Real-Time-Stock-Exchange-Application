using Microsoft.AspNetCore.SignalR;
using StockExchange.DTO;
using StockExchange.Hubs;
using StockExchange.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;


namespace StockExchange.Services
{
    public class StockService : IStockService
    {
        private readonly IHubContext<StockHub> _hubContext;
        private readonly ApplicationDbContext dbContext;
        private readonly ILogger<StockService> _logger;


        public StockService(IHubContext<StockHub> hubContext, ApplicationDbContext _dbContext, ILogger<StockService> logger)
        {
            _hubContext = hubContext;
            dbContext = _dbContext;
            _logger = logger;
        }

        public List<StockModel> GetRealTimeStockData()
        {

            List<StockModel> stocks = dbContext.Stocks.Include(s => s.Orders).ToList();
            return stocks;
        }

        public List<StockModel> GetStockHistory(string symbol)
        {
            List<StockModel> historicalData = dbContext.Stocks.Include(s => s.Orders).Where(x => x.Symbol.ToString() == symbol).ToList();
            return historicalData;
        }
        public OrderModel CreateOrder(OrderDTO order)
        {

            StockModel stockdata = dbContext.Stocks.Include(s => s.Orders).FirstOrDefault(s => s.Symbol == order.StockSymbol);

            OrderModel orderModel = new OrderModel();
            orderModel.StockSymbol = order.StockSymbol;
            orderModel.OrderType = order.OrderType;
            orderModel.Quantity = order.Quantity;
            orderModel.Stock = stockdata;
            orderModel.Stock.Timestamp = DateTime.Now;
            dbContext.Orders.Add(orderModel);
            try
            {
                dbContext.SaveChanges();

            }
            catch (Exception ex) { }
            //await dbContext.SaveChangesAsync();
            return orderModel;
        }

        public List<OrderModel> GetOrders()
        {
            List<OrderModel> orders = dbContext.Orders.Include(o => o.Stock).ToList();
            return orders;
        }

        private async Task SendRealTimeUpdate(StockModel stockData)
        {
            await _hubContext.Clients.All.SendAsync("UpdateStock", stockData);
        }
        //public List<StockModel> GetStockHistory2(string symbol)
        //{
        //    List<StockModel> historicalData = dbContext.Stocks.Include(s => s.Orders).Where(x => x.Symbol.ToString() == symbol).ToList();
        //    StockDTO stockDTO = new StockDTO();
        //    stockDTO.Symbol = historicalData[0].Symbol;
        //    stockDTO.Name = historicalData[0].Name;
        //    stockDTO.CurrentPrice = historicalData[0].CurrentPrice;
        //    stockDTO.Timestamp = historicalData[0].Timestamp;
        //    return new List<StockModel>() { historicalData[0] };
        //}
        //public async Task<OrderModel> CreateOrderAsync(OrderModel order)

    }
}
