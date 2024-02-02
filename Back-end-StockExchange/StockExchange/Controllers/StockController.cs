using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StockExchange.Services;

namespace StockExchange.Controllers
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


    }

}
