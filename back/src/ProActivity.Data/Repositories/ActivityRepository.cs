using System;
using System.Linq;
using System.Threading.Tasks;
using ProActivity.Data.Context;
using System.Collections.Generic;
using ProActivity.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using ProActivity.Domain.Entities.Filters;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Data.Repositories
{
    public class ActivityRepository : GeneralRepository, IActivityRepository
    {
        #region [ Attributes ]

        private readonly DataContext _context;

        #endregion

        #region [ Constructor ]

        public ActivityRepository(DataContext context) : base(context)
        {
            _context = context;    
        }

        #endregion

        #region [ Implementation Methods ]

        public async Task<Activity> Get(ActivityQuery filter)
        {
            IQueryable<Activity> query = _context.Activities;

            if (filter.Id.HasValue) {
                query = query.AsNoTracking().Where(a => a.Id == filter.Id);   
            }

            if (!string.IsNullOrEmpty(filter.Title)) {
                query = query.AsNoTracking().Where(a => a.Title == filter.Title);    
            }

            return await query.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Activity>> Search()
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking().OrderBy(a => a.Id);

            return await query.ToArrayAsync();
        }

        #endregion
    }
}