using System.ComponentModel.DataAnnotations;

namespace StockExchangeAPI.DTO
{
    public class StockDTO
    {
        [Key]
        public int Symbol { get; set; }
        public string Name { get; set; }
        public decimal CurrentPrice { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
