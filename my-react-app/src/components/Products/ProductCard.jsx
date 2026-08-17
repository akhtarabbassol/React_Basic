// function ProductCard({ product }) {
//   return (
//     <div className="product-card">

//       <div className="product-image-box">
//         <img  src={product.image} alt={product.name} className="product-image"/>
//       </div>

//       <div className="product-content">

//         <span className="product-category">
//           {product.category}
//         </span>

//         <h2 className="product-name">
//           {product.name}
//         </h2>

//         <p className="product-price">
//           Rs. {product.price.toLocaleString()}
//         </p>

//         <button className="product-button">
//           Add To Cart
//         </button>

//       </div>

//     </div>
//   );
// }

// export default ProductCard;


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