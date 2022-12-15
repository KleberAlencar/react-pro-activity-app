namespace ProActivity.API.Models
{
    public class Activity
    {

        #region [ Constructors ]

        public Activity()
        {
        }

        public Activity(int id)
        {
            this.Id = id;
        }

        #endregion

        #region [ Properties ]

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Priority { get; set; }

        #endregion
    }
}