import { WatchedSummary } from "./WatchedSummary";

export function Watched({
  watched,
  movieDetails,
  isOpen2,
  onIsOpen2,
  onAddWatched,
}) {
  const { Title, Actors, Director, Genre, Plot, Poster, Runtime, Ratings } =
    movieDetails;
  function handleAdd() {
    const newAddWatched = { Title, Poster, Runtime };
    onAddWatched(newAddWatched);
    console.log(newAddWatched);
    onIsOpen2(false);
  }

  return (
    <div className="box">
      <button className="toggle" onClick={() => onIsOpen2(!isOpen2)}>
        {isOpen2 ? "-" : "+"}
      </button>

      {isOpen2 ? (
        <ul>
          <li className="newBox">
            <img className="image" src={Poster} alt={Title} />
            <div className="details">
              <strong className="title">{Title}</strong>
              <p> Director:{Director}</p>
              <p> Genre:{Genre}</p>
              <button onClick={handleAdd}>+Add Movie</button>
              <p> Runtime:{Runtime}</p>
              <p> Plot:{Plot}</p>
              <p>Rating: {Ratings?.[0]?.Value || "N/A"}</p>
              <p> Starring :{Actors}</p>
            </div>
          </li>
        </ul>
      ) : (
        <WatchedSummary watched={watched} />
      )}
    </div>
  );
}
