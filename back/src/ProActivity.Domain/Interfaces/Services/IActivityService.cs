using System.Threading.Tasks;
using System.Collections.Generic;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Entities.Filters;

namespace ProActivity.Domain.Interfaces.Services
{
    public interface IActivityService
    {
        Task<Activity> Get(ActivityQuery filter);

        Task<IEnumerable<Activity>> Search();

        Task<Activity> Add(Activity entity);

        Task<Activity> Update(Activity entity);

        Task<bool> Delete(int id);

        Task<bool> CompleteActivity(Activity entity);
    }
}