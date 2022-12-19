using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Entities.Filters;
using ProActivity.Domain.Interfaces.Services;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        #region [ Attributes ]

        private readonly IActivityService _service;

        #endregion

        #region [ Constructor ]

        public ActivityController(IActivityService service)
        {
            _service = service;
        }

        #endregion

        #region [ Public Methods ]

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id) {
            ActivityQuery filterActivity = new ActivityQuery {
                Id = id
            };
            var activity = await _service.Get(filterActivity);
            if (activity == null) return NoContent();

            return Ok(activity);
        }   

        [HttpGet]
        public async Task<IActionResult> Search() {
            var activities = await _service.Search();
            if (activities == null) return NoContent();

            return Ok(activities);
        }   

        [HttpPost]
        public async Task<IActionResult> Add(Activity activity) {
            var returnActivity = await _service.Add(activity);
            if (returnActivity == null) return NoContent();

            return Ok(activity);
        }   

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Activity activity) {
            var returnActivity = await _service.Update(activity);
            if (returnActivity == null) return NoContent();

            return Ok(activity);
        }   

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            if (await _service.Delete(id)) {
                return Ok(new { message = "Deleted" });
            }
            else {
                return BadRequest($"Error when trying to delete id {id}");
            }
        }   

        #endregion
    }
}