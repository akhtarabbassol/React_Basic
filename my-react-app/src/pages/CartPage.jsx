 import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    subtotal,
    total,
  } = useCart();

  // Empty Cart
  if (cart.length === 0) {
    return (
      <main className="container empty-cart">

        <h1>Your Cart</h1>

        <p>
          Your cart is empty.
        </p>

        <Link
          to="/"
          className="continue-btn"
        >
          Continue Shopping
        </Link>

      </main>
    );
  }

  return (
    <main className="container">

      <h1 className="page-title">
        Shopping Cart
      </h1>

      <div className="cart-layout">

        {/* CART ITEMS */}

        <div className="cart-items">

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

        {/* SUMMARY */}

        <div className="cart-summary">

          <h2>
            Cart Summary
          </h2>

          <div className="summary-row">
            <span>
              Subtotal
            </span>

            <strong>
              Rs. {subtotal}
            </strong>
          </div>

          <div className="summary-row">
            <span>
              Shipping
            </span>

            <strong>
              Free
            </strong>
          </div>

          <hr />

          <div className="summary-row total-row">
            <span>
              Total
            </span>

            <strong>
              Rs. {total}
            </strong>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </main>
  );
};

export default Cart;