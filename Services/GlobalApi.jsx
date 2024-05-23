import axios from 'axios'

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='3d92973f77af7d534d758724c57dd37a'
//https://api.themoviedb.org/3/trending/all/day?language=en-US
const movieByGenreBaseUrl='https://api.themoviedb.org/3/genre/movie/list?api_key=3d92973f77af7d534d758724c57dd37a'
// https://api.themoviedb.org/3/genre/movie/list \


const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
// const getMovieByGenreId =(id)=>{
//     return axios.get(movieByGenreBaseUrl+"with_genres="+id)
// }
const getMovieByGenreId = (id) => {
    return axios.get(`${movieBaseUrl}/discover/movie`, {
      params: {
        api_key: api_key,
        with_genres: id,
      },
    });
};

export default{
    getTrendingVideos,
    getMovieByGenreId
}
