using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UxDesign.API.Data;
using UxDesign.API.Models;

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

        // GET api/blogs/5
        [AllowAnonymous]
        [HttpGet ("{id}")]
        public IActionResult GetBlog(int id) 
        {
            var blog =_context.Blogs.FirstOrDefault(x =>x.Id == id);

            return Ok(blog);

        }

        // POST api/blogs
        [HttpPost]
        public IActionResult CreateBlog ([FromBody] Blog blog) 
        {
           if(!ModelState.IsValid)
           {
               return BadRequest(ModelState);
           }
           _context.Blogs.Add(blog);
           _context.SaveChanges();

           return Ok();

        }

    }
}