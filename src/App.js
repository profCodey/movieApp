import "./App.css";
import SearchBar from "./Filter";
import Modal from "./Modal";
import MovieList from "./MovieList";
import movieArr from "./MovieObjArr";
import { useState } from "react";

function App() {
  const [allMovies, setAllMovies] = useState(movieArr);
  let movieArrCopy = movieArr.slice();
  function handleFilter(search) {
    let filteredMovie = movieArrCopy.filter((value) =>
      value.title.toLowerCase().includes(search.toLowerCase())
    );
    setAllMovies(filteredMovie);
  }
 
 function handleAddMovie(movieObj){
   let newMovieArr = [...movieArr, movieObj]
    setAllMovies(newMovieArr)
}


  return (
    <div className="App">
      <SearchBar handleFilter={handleFilter} />
      <Modal handleAddMovie={handleAddMovie} />
      <MovieList allMovies={allMovies} />
    </div>
  );
}

export default App;

//SearchBar/Filter - Search for movies by title
//MovieCard - Display movie poster, title, rating, and genre(s)- contains one card
//MovieList - Loop through movieCard and display them
//ModalComponent - FORM - Add a movie to the list
//App - contains all components
//MOVIEOBJECT - contains all movie data
