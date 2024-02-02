namespace StockExchange.DTO
{
    public class OrderDTO
    {
        public int StockSymbol { get; set; }
        public string OrderType { get; set; } // 'buy' or 'sell'
        public int Quantity { get; set; }
    }
}
