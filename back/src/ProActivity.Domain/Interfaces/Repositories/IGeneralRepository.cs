using System.Threading.Tasks;

namespace ProActivity.Domain.Interfaces.Repositories
{
    public interface IGeneralRepository
    {
        void Add<T>(T entity) where T : class;

        void Update<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        void DeleteMany<T>(T[] entities) where T : class;

        Task<bool> SaveAsync();
    }
}