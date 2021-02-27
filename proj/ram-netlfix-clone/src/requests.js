const tmdbAPIKey = "8b5bb89885e5a18911beb48c10f89a46";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${tmdbAPIKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${tmdbAPIKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${tmdbAPIKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${tmdbAPIKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${tmdbAPIKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${tmdbAPIKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${tmdbAPIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${tmdbAPIKey}&with_genres=99`
}

export default requests;
