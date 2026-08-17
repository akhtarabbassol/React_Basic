
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="price">
          Rs. {product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="add-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;