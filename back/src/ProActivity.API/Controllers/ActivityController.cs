using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProActivity.API.Data;
using ProActivity.API.Models;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        #region [ Attributes ]

        private readonly DataContext _context;

        #endregion

        #region [ Constructor ]

        public ActivityController(DataContext context)
        {
            _context = context;
        }

        #endregion

        #region [ Public Methods ]

        [HttpGet]
        public IEnumerable<Activity> Search() {
            return _context.Activities;
        }   

        [HttpGet("{id}")]
        public Activity Get(int id) {
            return _context.Activities.FirstOrDefault(a => a.Id == id);
        }   

        [HttpPost]
        public Activity Add(Activity activity) {
            if (activity == null) return new Activity();

            _context.Activities.Add(activity);
            if (_context.SaveChanges() > 0)
                return _context.Activities.FirstOrDefault(a => a.Id == activity.Id);
            else
                throw new Exception("Transaction is invalid!");    
        }   

        [HttpPut("{id}")]
        public Activity Update(int id, Activity activity) {
            if (activity.Id != id) throw new Exception("Transaction is invalid!");

            _context.Update(activity);
            if (_context.SaveChanges() > 0)
                return _context.Activities.FirstOrDefault(a => a.Id == id);
            else
                return new Activity();    
        }   

        [HttpDelete("{id}")]
        public bool Delete(int id) {
            var activity = _context.Activities.FirstOrDefault(a => a.Id == id);
            if (activity == null)
                throw new Exception("Transaction is invalid!");

            _context.Remove(activity);    

            return _context.SaveChanges() > 0;
        }   

        #endregion
    }
}