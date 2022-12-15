using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProActivity.API.Models;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        public IEnumerable<Activity> Activities = new List<Activity>() {
            new Activity(1),
            new Activity(2),
            new Activity(3)
        };

        [HttpGet]
        public IEnumerable<Activity> Search() {
            return Activities;
        }   

        [HttpGet("{id}")]
        public Activity Get(int id) {
            return Activities.FirstOrDefault(a => a.Id == id);
        }   

        [HttpPost]
        public IEnumerable<Activity> Add(Activity activity) {
            return Activities.Append<Activity>(activity);
        }   

        [HttpPut("{id}")]
        public string Update(int id) {
            return "primeiro método Put";
        }   

        [HttpDelete("{id}")]
        public string Delete(int id) {
            return "primeiro método Delete";
        }   
    }
}