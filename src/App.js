import { useEffect, useState } from "react";

import { Header } from "./Header";
import { Watched } from "./Watched";
import { Movie } from "./Movie";
export const KEY = "d270a7b";
export default function App() {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  const [watched, setWatched] = useState([]);
  const [selectedId, setSelectedID] = useState(null);
  const [movieDetails, setMovieDetails] = useState({});
  const [isOpen2, setIsOpen2] = useState(false);
  function handleSelectedId(id) {
    setSelectedID(id);
  }
  function onAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  useEffect(
    function () {
      if (text === "") return;
      async function getMovieData() {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${text}`
        );
        const data = await res.json();
        console.log(data.Search);
        if (data.Response === "True") {
          setMovie(data.Search);
        }
      }
      getMovieData();
      setMovie([]);
    },
    [text]
  );
  return (
    <div className="container">
      <Header text={text} onText={setText} movie={movie} />
      <div className="boxes">
        <Movie
          movie={movie}
          onSelectedId={handleSelectedId}
          selectedId={selectedId}
          onMovie={setMovie}
          onMovieDetails={setMovieDetails}
          onIsOpen2={setIsOpen2}
          isOpen2={isOpen2}
        />
        <Watched
          watched={watched}
          movieDetails={movieDetails}
          onIsOpen2={setIsOpen2}
          isOpen2={isOpen2}
          onAddWatched={onAddWatched}
          movie={movie}
        />
      </div>
    </div>
  );
}
