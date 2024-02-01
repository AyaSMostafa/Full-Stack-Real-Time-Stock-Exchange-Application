using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockExchangeAPI.Models
{
    public class StockModel
    {
        [Key] 
        public int Symbol { get; set; }
        public string Name { get; set; }
        public decimal CurrentPrice { get; set; }
        public DateTime Timestamp { get; set; }

        // Configure one-to-many relationship between StockModel and OrderModel
        public ICollection<OrderModel> Orders { get; set; }

    }
}
