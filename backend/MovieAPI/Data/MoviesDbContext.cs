//This is the middleman between the data and browswer

using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
