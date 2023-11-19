const apiKey = 'c079a502c864b9c407aa4a8eb6ffcde2'

const requests = {
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`,
    requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
    requestNow: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    requestShows: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`,

}


export default requests