import { useState, useEffect } from "react";
import { KEY } from "./App";

export function Movie({
  movie,
  onSelectedId,
  selectedId,
  onMovieDetails,
  onIsOpen2,
}) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        console.log(data);
        onMovieDetails(data);
      }
      getMovieDetails();
    },
    [selectedId, onMovieDetails]
  );

  return (
    <div className="box" onClick={() => onIsOpen2(true)}>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <ul>
          <h3>Movies</h3>
          {movie.map((movie) => (
            <li key={movie.Title} onClick={() => onSelectedId(movie.imdbID)}>
              {/* <div className="details"> */}
              <img className="image" src={movie.Poster} alt={movie.Title} />
              <div className="details">
                <strong className="title">{movie.Title}</strong>
                <p className="year">Year: {movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
