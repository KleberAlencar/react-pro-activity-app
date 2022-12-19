using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Entities.Filters;
using ProActivity.Domain.Interfaces.Services;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Domain.Services
{
    public class ActivityService : IActivityService
    {
        #region [ Attibutes ]

        private readonly IActivityRepository _activityRepository;

        #endregion

        #region [ Constructor ]

        public ActivityService(IActivityRepository activityRepository)
        {
            _activityRepository = activityRepository;
        }

        #endregion

        #region [ Implementation Methods ]

        public async Task<Activity> Get(ActivityQuery filter)
        {
            try
            {
                var activity = await _activityRepository.Get(filter);
                if (activity == null) return new Activity();

                return activity;
            }
            catch (System.Exception ex)
            {              
                throw new Exception(ex.Message);
            }
        }

        public async Task<IEnumerable<Activity>> Search()
        {
            try
            {
                return await _activityRepository.Search();
            }
            catch (System.Exception ex)
            {              
                throw new Exception(ex.Message);
            }
        }

        public async Task<Activity> Add(Activity entity)
        {
            ActivityQuery filterActivity = new ActivityQuery {
                Id = entity.Id,
                Title = entity.Title
            };

            if (await _activityRepository.Get(filterActivity) != null) 
                throw new Exception("Activity already exists");

            _activityRepository.Add(entity);
            await _activityRepository.SaveAsync();

            return entity;    
        }

        public async Task<bool> CompleteActivity(Activity entity)
        {
            if (entity != null) {
                entity.Conclude();
                _activityRepository.Update<Activity>(entity);
                return await _activityRepository.SaveAsync();
            }

            return false;
        }

        public async Task<bool> Delete(int id)
        {
            ActivityQuery filterActivity = new ActivityQuery {
                Id = id
            };
            var activity = await _activityRepository.Get(filterActivity);
            if (activity == null)
                throw new Exception("Activity does not exist");

            _activityRepository.Delete(activity);
            return await _activityRepository.SaveAsync();
        }

        public async Task<Activity> Update(Activity entity)
        {
            if (entity.ConclusionDate != null) 
                throw new Exception("It is not possible to change activity already completed");

            _activityRepository.Update(entity);
            await _activityRepository.SaveAsync();

            return entity;        
        }

        #endregion
    }
}