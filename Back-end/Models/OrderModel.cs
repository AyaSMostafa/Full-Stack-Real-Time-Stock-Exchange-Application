namespace StockExchangeAPI.Models
{
    public class OrderModel
    {
        public int Id { get; set; }
        public int StockSymbol { get; set; }
        public string OrderType { get; set; } // 'buy' or 'sell'
        public int Quantity { get; set; }
        // Navigation property
        public StockModel Stock { get; set; }
    }
}
