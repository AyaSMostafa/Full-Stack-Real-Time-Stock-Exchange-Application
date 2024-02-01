using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using StockExchangeAPI.Hubs;
using StockExchangeAPI.Models;
using StockExchangeAPI.Services;

namespace StockExchangeAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api")]
    public class StockController : ControllerBase
    {
        private readonly IStockService _stockService;


        public StockController(IStockService stockService)
        {
            _stockService = stockService;
        }

        [HttpGet("stocks")]
        public IActionResult GetRealTimeStockData()
        {
            var stockData = _stockService.GetRealTimeStockData();
            return Ok(stockData);
        }

        [HttpGet("stocks/{symbol}/history")]
        public IActionResult GetStockHistory(string symbol)
        {
            var stockHistory = _stockService.GetStockHistory(symbol);
            return Ok(stockHistory);
        }
        [HttpGet("stocks/{symbol}/history2")]
        public IActionResult GetStockHistory2(string symbol)
        {
            var stockHistory = _stockService.GetStockHistory2(symbol);
            return Ok(stockHistory);
        }
        [HttpPost("orders")]
        public IActionResult CreateOrder(OrderModel order)
        {
            var createdOrder = _stockService.CreateOrder(order);
            return Ok(createdOrder);
        }

        [HttpGet("orders")]
        public IActionResult GetOrders()
        {
            var orders = _stockService.GetOrders();
            return Ok(orders);
        }
       
    }


}
