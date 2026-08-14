function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;