using Microsoft.EntityFrameworkCore;
using UxDesign.API.Models;

namespace UxDesign.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<Value> Values { get; set;}

        public DbSet<User> Users { get; set; }

         public DbSet<Portfolio> Portfolios { get; set; }

         public DbSet<Blog> Blogs { get; set; }
    }

}