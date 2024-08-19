export function WatchedSummary({ watched }) {
  return (
    <div className="summary">
      <ul>
        <h3>Watched Movies</h3>
        {watched.map((movie, index) => (
          <li key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
            <p>Runtime:{movie.Runtime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
