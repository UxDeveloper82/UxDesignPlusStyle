using System.Collections.Generic;
using System;

namespace UxDesign.API.Models
{
    public class Blog
    {
        public int Id { get; set; }

        public string Image { get; set; }

        public string Title { get; set; }

        public string Post { get; set; }

        public DateTime Created  { get; set; }

        public string Author { get; set; }
    }
}