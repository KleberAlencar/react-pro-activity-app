using System.Threading.Tasks;
using ProActivity.Data.Context;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Data.Repositories
{
    public class GeneralRepository : IGeneralRepository
    {
        #region [ Attributes ]

        private readonly DataContext _context;

        #endregion

        #region [ Constructor ]

        public GeneralRepository(DataContext context)
        {
            _context = context;
        }

        #endregion

        #region [ Implementation Methods ]

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void DeleteMany<T>(T[] entities) where T : class
        {
            _context.RemoveRange(entities);
        }

        public async Task<bool> SaveAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        #endregion
    }
}