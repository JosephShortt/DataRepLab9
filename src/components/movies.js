import MovieItem from "./movieItem.js"
//Movies const function returns unique key for each movie
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie} key={movie.imdbID}/>
        }
    );
}

export default Movies;