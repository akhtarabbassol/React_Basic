function CategoryFilter({ category, setCategory }) {
  return (
    <select value={category}  onChange={(e) => setCategory(e.target.value)}  >
      <option value="All">
        All Categories
      </option>

      <option value="Electronics">
        Electronics
      </option>

      <option value="Clothing">
        Clothing
      </option>

      <option value="Footwear">
        Footwear
      </option>
    </select>
  );
}

export default CategoryFilter;