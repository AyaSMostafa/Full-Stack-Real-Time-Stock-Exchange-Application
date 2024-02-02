using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StockExchange.Services;
using StockExchange.DTO;

namespace StockExchange.Controllers
{
    [Authorize]
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
        [HttpPost("addorder")]
        public IActionResult CreateOrder(OrderDTO order)
        {
            var createdOrder = _stockService.CreateOrder(order);
            return Ok(createdOrder);
        }

        //[HttpGet("orders")]
        //public IActionResult GetOrders()
        //{
        //    var orders = _stockService.GetOrders();
        //    return Ok(orders);
        //}

    }
}
