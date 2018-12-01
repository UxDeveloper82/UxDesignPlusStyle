using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UxDesign.API.Data;

namespace UxDesign.API.Controllers 
{
    [AllowAnonymous]
    [Route ("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase 
    {
        private readonly DataContext _context;

        public BlogsController (DataContext context) 
        {
            _context = context;

        }

         // GET api/blogs
        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetBlogs() 
        {
            var blogs = _context.Blogs.ToList();

            return Ok(blogs);
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet ("{id}")]
        public IActionResult GetBlog(int id) 
        {
            var blog =_context.Blogs.FirstOrDefault(x =>x.Id == id);

            return Ok(blog);

        }
    }
}