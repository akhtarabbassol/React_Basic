

import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cartItemCount } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">My Shop</Link>
      </div>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">
            {cartItemCount}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;