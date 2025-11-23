using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UndroppablesAPI.Models;

namespace UndroppablesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TradeAnalyzerController : ControllerBase
    {
        private readonly UndroppablesDbContext _context;

        public TradeAnalyzerController(UndroppablesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TradeAnalyzerDatum>>> GetTradeAnalyzerData()
        {
            try
            {
                var data = await _context.TradeAnalyzerData.ToListAsync();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Something went wrong!", error = ex.Message });
            }
        }
    }
}
