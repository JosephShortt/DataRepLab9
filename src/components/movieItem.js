import { useEffect } from "react"; // Importing the use effext from react
import Card from 'react-bootstrap/Card'; //Importing card component from bootstrap
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from "axios";
function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes
  //Creates a bootsrap card that displays the movie poster, year

  const handleDelete = (e) => {
    e.preventDefault();
    //Deletes the movie with the given ID using axios.deleted
    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
      .then(() => {
        props.Reload(); // Refresh the movie list after deletion
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  };

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
        {/*Delete Button that calls handleDelete*/} 
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

//Exporting th emovie item to be used in movies
export default MovieItem;