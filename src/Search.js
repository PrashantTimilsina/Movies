export function Search({ text, onText }) {
  return (
    <input
      type="text"
      value={text}
      placeholder="Search Movies"
      onChange={(e) => onText(e.target.value)}
    />
  );
}
