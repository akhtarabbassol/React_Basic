import products from "../data/products";
import ProductCard from "../components/Products/ProductCard";

const Home = () => {
  return (
    <main className="container">

      <h1 className="page-title">
        Our Products
      </h1>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </main>
  );
};

export default Home;