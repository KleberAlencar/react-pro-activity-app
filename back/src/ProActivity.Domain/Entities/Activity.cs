using System;
using ProActivity.Domain.Enums;

namespace ProActivity.Domain.Entities
{
    public class Activity
    {

        #region [ Constructors ]

        public Activity() {
            CreationDate = DateTime.Now;
            ConclusionDate = null;
        }

        public Activity(int id, string title, string description) : this()
        {
            Id = id;
            Title = title;
            Description = description;
        }

        #endregion

        #region [ Properties ]

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime CreationDate { get; set; }

        public DateTime? ConclusionDate { get; set; }

        public EPriority Priority { get; set; }

        #endregion

        #region [ Public Methods ]

        public void Conclude() {
            if (ConclusionDate == null)
                ConclusionDate = DateTime.Now;
            else
                throw new Exception($"Activity completed on: {ConclusionDate?.ToString("dd/MM/yyyy hh:mm")}");    
        }

        #endregion
    }
}