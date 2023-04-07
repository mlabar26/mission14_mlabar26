using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Data;
using System.Collections.Immutable;

namespace MovieAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp) {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            //This is how to order and only return edited movies
            var x = context.Movies.ToArray().OrderBy(Movie => Movie.Title);
            return x.Where(Movie => Movie.Edited == "Yes");
        }
    }
}
