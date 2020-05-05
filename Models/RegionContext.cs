using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace Test.Models
{
    public class RegionContext : DbContext
    {

        public RegionContext(DbContextOptions<RegionContext> options)
            : base(options)
        {
        }
        public DbSet<Region> Regions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optBuilder)
        {
            optBuilder.UseSqlServer("Data Source=TYLER\\SQLEXPRESS;Initial Catalog=HousingDB;Integrated Security=True");
        }
    }
}
