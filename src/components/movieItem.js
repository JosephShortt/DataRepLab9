import { useEffect } from "react";

const MovieItem = (props)=>{
    

    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <h3>{props.myMovie.Year}</h3>
            <h3>{props.myMovie.imdbID}</h3>
            <h3>{props.myMovie.Type}</h3>
            <img src={props.myMovie.Poster}></img>

        </div>
    );
}

export default MovieItem;