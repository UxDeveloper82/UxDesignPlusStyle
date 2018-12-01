using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UxDesign.API.Data;

namespace UxDesign.API.Controllers 
{
    [Route ("api/[controller]")]
    [ApiController]
    public class PortfoliosController : ControllerBase
    {
        private readonly DataContext _context;
        
        public PortfoliosController (DataContext context)
        {
            _context = context;

        }

         // GET api/portfolios
        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetPortfolio()
        {
            var portfolio = _context.Portfolios.ToList();

            return Ok(portfolio);

        }
        
        [AllowAnonymous]
        [HttpGet("{id}")]
        public IActionResult GetPort(int id)
        {
            var port = _context.Portfolios.SingleOrDefault(p =>p.Id == id);
            return Ok(port);
        }

    }
}