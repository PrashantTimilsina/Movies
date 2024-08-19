import { Search } from "./Search";

export function Header({ text, onText, movie }) {
  const movieLength = movie.length;
  return (
    <header>
      <div className="header">
        <span>🎬</span>
        <Search text={text} onText={onText} />
        <p>Found {movieLength} movies</p>
      </div>
    </header>
  );
}
