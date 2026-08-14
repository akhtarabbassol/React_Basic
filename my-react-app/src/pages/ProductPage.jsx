import { useState } from "react";

import products from "../data/products";

import ProductCard from "../components/Products/ProductCard";
import SearchBar from "../components/Products/SearchBar";
import CategoryFilter from "../components/Products/CategoryFilter";
import SortSelect from "../components/Products/SortSelect";

 


function ProductPage() {

  // Search ki value
  const [search, setSearch] = useState("");

  // Selected category
  const [category, setCategory] = useState("All");

  // Selected sorting
  const [sort, setSort] = useState("default");


  // Search + Category Filter
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      product.category === category;


    return matchesSearch && matchesCategory;
  });


  // Price Sorting
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {

      if (sort === "lowToHigh") {
        return a.price - b.price;
      }

      if (sort === "highToLow") {
        return b.price - a.price;
      }

      return 0;
    }
  );


  return (
    <div className="product-page">

      <h1>
        Product Listing
      </h1>


      {/* Search + Filter + Sort */}

      <div className="controls">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />


        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />


        <SortSelect
          sort={sort}
          setSort={setSort}
        />

      </div>


      {/* Products */}

      {sortedProducts.length === 0 ? (

        <h2>
          No products found
        </h2>

      ) : (

        <div className="product-grid">

          {sortedProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      )}

    </div>
  );
}


export default ProductPage;