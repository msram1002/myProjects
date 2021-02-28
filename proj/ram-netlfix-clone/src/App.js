import './App.css';
import MovieRow from './MovieRow/MovieRow';
import Banner from './Banner/Banner';
import requests from './requests';

function App() {
  return (
    <div className= "App">
      <Banner />
      <MovieRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow = {true}/>
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
