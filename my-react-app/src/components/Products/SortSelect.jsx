function SortSelect({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="default">
        Sort By Price
      </option>

      <option value="lowToHigh">
        Price: Low to High
      </option>

      <option value="highToLow">
        Price: High to Low
      </option>
    </select>
  );
}

export default SortSelect;