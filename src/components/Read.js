//Read.js

import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
// Defining a state variable 'data' to hold the movie data, initialized to an empty array
  const [data, setData] = useState([]);

  // Function to reload movie data from the server
  const Reload = () => {
      console.log("Reloading movie data...");
      axios.get('http://localhost:4000/api/movies') // Sending a GET request to the API endpoint
          .then((response) => {
            // If the request is successful, update the 'data' state with the fetched movies
              setData(response.data.movies);
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
  };

  useEffect(() => {
      Reload();
  }, []); // Empty dependency array ensures this runs only once on component mount
  
  return (
    <div>
      <h2></h2>
      <h2>This is my Read Component.</h2>
      {/* Pass the fetched movies as a prop (myMovies) to the Movies component for rendering */}
      <Movies myMovies={data} ReloadData={Reload} />
      </div>
  );
}

export default Read;