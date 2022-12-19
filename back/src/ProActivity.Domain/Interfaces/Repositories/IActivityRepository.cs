
using System.Threading.Tasks;
using System.Collections.Generic;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Entities.Filters;

namespace ProActivity.Domain.Interfaces.Repositories
{
    public interface IActivityRepository : IGeneralRepository
    {
        Task<Activity> Get(ActivityQuery filter);

        Task<IEnumerable<Activity>> Search();
    }
}