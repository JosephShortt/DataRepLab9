import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes
  //Creates a bootsrap card that displays the movie poster, year
  return (
    <div>
      <Card>
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieItem;