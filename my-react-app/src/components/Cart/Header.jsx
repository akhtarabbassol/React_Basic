import { useCart } from "../../context/CartContext";


function Header() {

  const {cartItemCount} = useCart();


  return (

    <header className="header">

      <div className="header-container">

        <h2 className="logo">
          My Shop
        </h2>


        <div className="cart-icon">

          🛒

          <span className="cart-count">
            {cartItemCount}
          </span>

        </div>

      </div>

    </header>

  );

}


export default Header;