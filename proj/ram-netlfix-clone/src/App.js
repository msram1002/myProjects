import './App.css';
import MovieRow from './MovieRow/MovieRow';
import requests from './requests';

function App() {
  return (
    <div className= "App">
      <MovieRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}


export default App;
