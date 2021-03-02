import React, {useState, useEffect} from 'react';
import axios from '../axios';
import './MovieRow.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// For image we need base url
let img_base_url = "https://image.tmdb.org/t/p/w500";

function MovieRow({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handelClick = (movie) => {
    // Functionality to handle when we click twice
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.originalname || "")
        .then((url) => {
          if (url !== null) {
            // We need the videoId for youtube to play
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer link has been found for this movie");  
          } 
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="movierow">
      <h2>{title}</h2>
      {/* <div className="movierow_posters">
        {movies.map((movie) => {
          <img src={`${img_base_url}${movie.poster_path}`} alt={movie.name} /> 
        })}
      </div> */}
      <div className="movierow__posters">
        {movies.map((movie) => (
          <img key={movie.id} onClick={()=>handelClick(movie)}
            className={`movierow__posters__posterItem ${isLargeRow && "movierow__poster__posterItemLarge"}`} 
            src={`${img_base_url}${isLargeRow?movie.poster_path: movie.backdrop_path}`} 
            alt={movie.name} /> 
        ))}
      </div>
      {trailerUrl &&
        <YouTube videoId={trailerUrl} opts={opts} />
      }     
    </div>
  )
}

export default MovieRow;
