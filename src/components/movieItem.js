import { useEffect } from "react"; // Importing the use effext from react
import Card from 'react-bootstrap/Card'; //Importing card component from bootstrap
import { Link } from 'react-router-dom';
function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes
  //Creates a bootsrap card that displays the movie poster, year
  return (
    <div>
      <Card>
        {/* Card header displays the movie title */}
        <Card.Header>{props.myMovie.title}</Card.Header>
        {/* Card body displays the movies image and year */}
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">Edit</Link>
      </Card>
    </div>
  );
}

//Exporting th emovie item to be used in movies
export default MovieItem;