using ProActivity.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ProActivity.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {            
        }

        public DbSet<Activity> Activities { get; set; }
    }
}