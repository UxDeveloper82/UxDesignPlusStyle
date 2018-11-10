using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UxDesign.API.Data;

namespace UxDesign.API.Controllers 
{
    [Route ("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase 
    {
        private readonly DataContext _context;

        public BlogsController (DataContext context) 
        {
            _context = context;

        }

         // GET api/Blogs
        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetBlogs() 
        {
            var blogs = _context.Blogs.ToList();

            return Ok(blogs);
        }
    }
}