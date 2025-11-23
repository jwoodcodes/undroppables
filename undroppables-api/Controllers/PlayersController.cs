using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UndroppablesAPI.Models;

namespace UndroppablesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayersController : ControllerBase
    {
        private readonly UndroppablesDbContext _context;

        public PlayersController(UndroppablesDbContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<AllPlayerDatum>>> GetAllPlayers()
        {
            try
            {
                var players = await _context.AllPlayerData.ToListAsync();
                return Ok(players);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return StatusCode(500, new { message = "Something went wrong!", error = ex.Message });
            }
        }

        [HttpGet("sleeper")]
        public async Task<ActionResult<IEnumerable<SleeperPlayer>>> GetSleeperPlayers()
        {
            try
            {
                var players = await _context.SleeperPlayers.ToListAsync();
                return Ok(players);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Something went wrong!", error = ex.Message });
            }
        }

        [HttpGet("unscore")]
        public async Task<ActionResult<IEnumerable<UnscorePlayer>>> GetUNScorePlayers()
        {
            try
            {
                var players = await _context.UnscorePlayers.ToListAsync();
                return Ok(players);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Something went wrong!", error = ex.Message });
            }
        }
    }
}
