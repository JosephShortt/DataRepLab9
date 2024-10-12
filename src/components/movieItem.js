import { useEffect } from "react"; // Importing the use effext from react
import Card from 'react-bootstrap/Card'; //Importing card component from bootstrap

function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes
  //Creates a bootsrap card that displays the movie poster, year
  return (
    <div>
      <Card>
        {/* Card header displays the movie title */}
        <Card.Header>{props.myMovie.Title}</Card.Header>
        {/* Card body displays the movies image and year */}
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

//Exporting th emovie item to be used in movies
export default MovieItem;