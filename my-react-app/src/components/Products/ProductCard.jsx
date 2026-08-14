function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-box">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h2 className="product-name">
          {product.name}
        </h2>

        <p className="product-price">
          Rs. {product.price.toLocaleString()}
        </p>

        <button className="product-button">
          View Product
        </button>

      </div>

    </div>
  );
}

export default ProductCard;