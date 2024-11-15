import MovieItem from "./movieItem.js" //importing movieitem component
//Movies const function returns unique key for each movie
const Movies = (props)=>{
    // The map function iterates over each movie in 'myMovies' and returns a MovieItem component for each movie
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie} key={movie.id}/>
        }
    );
}
//Exporting the movies component to be used in read.js
export default Movies;