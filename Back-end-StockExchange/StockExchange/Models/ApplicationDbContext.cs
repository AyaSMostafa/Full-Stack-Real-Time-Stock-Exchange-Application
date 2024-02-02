using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace StockExchange.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<StockModel> Stocks { get; set; }
        public DbSet<OrderModel> Orders { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Specify the SQL server column type for CurrentPrice
            modelBuilder.Entity<StockModel>()
                .Property(s => s.CurrentPrice)
                .HasColumnType("decimal(18,2)");
            // Configure one-to-many relationship between StockModel and OrderModel
            modelBuilder.Entity<StockModel>()
                .HasMany(stock => stock.Orders)
                .WithOne(order => order.Stock)
                .HasForeignKey(order => order.StockSymbol)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OrderModel>()
                .HasOne(o => o.Stock)
                .WithMany(s => s.Orders)
                .HasForeignKey(o => o.StockSymbol);
            base.OnModelCreating(modelBuilder);

        }
    }

}
