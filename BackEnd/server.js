const express = require('express'); // Import the express framework
const app = express();
const port = 4000;

// Enable CORS (Cross-Origin Resource Sharing)
const cors = require('cors');
app.use(cors()); // Allow cross-origin requests

//handle CORS headers manually
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Import body-parser to handle JSON and URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // Enable URL-encoded data parsing
app.use(bodyParser.json()); // Enable JSON data parsing


const mongoose = require('mongoose');
//Connect to mongoose db using specific string
mongoose.connect('mongodb+srv://admin:admin@cluster0.y6xzc.mongodb.net/MyMovieDB');

//Define movie schema for the documents
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});
//Create a movied model for myMovies
const MovieModel = new mongoose.model('myMovies', movieSchema);

// Define a GET endpoint to return a list of movies
app.get('/api/movies', async (req, res) => {
  const movies = await MovieModel.find({});
  res.json({ movies }); 
});

//Request spcific movie details using asynchronous 
app.get('/api/movies/:id', async (req, res) => {
  const movie = await MovieModel.findById(req.params.id);
  res.json(movie);
});

app.put('/api/movie/:id', async (req, res) => {
  let movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(movie);
});

// Defining a DELETE route to handle requests for deleting a movie by its ID
app.delete('/api/movie/:id', async (req, res) => {
  
  console.log('Deleting movie with ID:', req.params.id);
  // Using the MovieModel to find and delete the movie with the given ID
  // The ID is extracted from the request parameters (req.params.id)
  const movie = await MovieModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Movie deleted successfully", movie });
  
});

// Define a POST endpoint to receive and log a new movie
app.post('/api/movies', async (req, res) => {

  console.log("Movie: " + req.body.Title);

  const { title, year, poster } = req.body;
  const newMovie  = new MovieModel({ title, year, poster });
  await newMovie.save();
  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// {
//   "Title": "Avengers: Infinity War (server)",
//   "Year": "2018",
//   "imdbID": "tt4154756",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
// },
// {
//   "Title": "Captain America: Civil War (server)",
//   "Year": "2016",
//   "imdbID": "tt3498820",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
// },
// {
//   "Title": "World War Z (server)",
//   "Year": "2013",
//   "imdbID": "tt0816711",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
// }