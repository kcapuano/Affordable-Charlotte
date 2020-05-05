using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Test.Models
{
    public class Region
    {
        public int regionID { get; set; }
        public string regionName { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public double price { get; set; }
    }
}
