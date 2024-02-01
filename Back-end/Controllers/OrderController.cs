using Microsoft.AspNetCore.Mvc;
using StockExchangeAPI.Services;

namespace StockExchangeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IStockService _stockService;
        public OrderController(IStockService stockService)
        {
            _stockService = stockService;
        }

        [HttpGet("orders")]
        public IActionResult GetOrders()
        {
            try
            {
                var orders = _stockService.GetOrders();

                if (orders.Any())
                {
                    return Ok(orders);
                }
                else
                {
                    return NotFound(new { error = "No orders found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = "Failed to retrieve orders", message = ex.Message });
            }
        }

    }

}
