// create.js
//Import useState
import { useState } from "react";

function Create() {
  // Define state variables to manage form inputs for movie title, year, and poster URL
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,year,poster);
    
  }
  //Returns each entered input into console for movie title, year and poster
  return (
     <div>
    <h2>This is my Create Component.</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Add Movie Title: </label>
        <input type="text"
          className="form-control"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label>Add Movie Year: </label>
        <input type="text"
          className="form-control"
          value={year}
          onChange={(e) => { setYear(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label>Add Movie Poster URL: </label>
        <input type="text"
          className="form-control"
          value={poster}
          onChange={(e) => { setPoster(e.target.value) }}
        />
      </div>
      <input type="submit" value="Add Movie" />
    </form>
  </div>
  );
}

export default Create;