import React, {useState, useEffect} from 'react';
import axios from '../axios';
import './MovieRow.css';

// For image we need base url
let img_base_url = "https://image.tmdb.org/t/p/w500";

function MovieRow({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);
  // Need to run piece of code upon a condition
  useEffect(() => {
    // We need to run once only when the movie row component loads
    // if blank [], no dependencies meaning run once
    async function fetchMovieData () {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchMovieData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="movierow">
      <h2>{title}</h2>
      {/* <div className="movierow_posters">
        {movies.map((movie) => {
          <img src={`${img_base_url}${movie.poster_path}`} alt={movie.name} /> 
        })}
      </div> */}
      <div className="movierow_posters">
        {movies.map((movie) => (
          <img className="movierow__poster" src={`${img_base_url}${movie.poster_path}`} alt={movie.name} /> 
        ))}
      </div>
    </div>
  )
}

export default MovieRow;
