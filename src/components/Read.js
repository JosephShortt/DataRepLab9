//Read.js

import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);

  const Reload = () => {
      console.log("Reloading movie data...");
      axios.get('http://localhost:4000/api/movies')
          .then((response) => {
              setData(response.data.movies);
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
  };

  useEffect(() => {
      Reload();
  }, []);
  
  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* Pass the fetched movies as a prop (myMovies) to the Movies component for rendering */}
      <Movies myMovies={data} ReloadData={Reload} />
      </div>
  );
}

export default Read;