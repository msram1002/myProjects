import React, {useState, useEffect} from 'react'
import axios from '../axios';
import './Banner.css';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchHeaderData () {
      const req = await axios.get(requests.fetchTopRated);
      // Selecting a random movie from the top rated movies
      setMovie(req.data.results[
        Math.floor(Math.random() * req.data.results.length - 1)
      ]);
      return req;
    }
    fetchHeaderData();
  }, []);

  // Truncate function for string and add ellpsis
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}>
      <div className="banner__contents">
        <h1 className="banner__contents__title">
          {movie?.title || movie?.name || movie?.originalname }
        </h1>
        <div className="banner__contents__buttons">
          <button className="banner__contents__buttons__button">
            Play
          </button>
          <button className="banner__contents__buttons__button">
            My List
          </button>
          <p className="banner__contents__desc">
            {truncate(movie?.overview, 200)}
          </p>
        </div>
      </div>
      {/* modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module */}
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner;
