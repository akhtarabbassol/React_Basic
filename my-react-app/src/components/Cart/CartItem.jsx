import { useCart } from "../../context/CartContext";


function CartItem({ item }) {

  const {increaseQuantity,decreaseQuantity,removeFromCart} = useCart();


  return (

    <div className="cart-item">

      {/* Product Image */}

      <img src={item.image}alt={item.name}className="cart-item-image"/>


      {/* Product Details */}

      <div className="cart-item-details">

        <h3>
          {item.name}
        </h3>

        <p>
          Rs. {item.price.toLocaleString()}
        </p>

      </div>


      {/* Quantity */}

      <div className="quantity-controls">

        <button onClick={() => {decreaseQuantity(item.id);}}>
          -
        </button>


        <span>
          {item.quantity}
        </span>


        <button onClick={() => {increaseQuantity(item.id); }}>
          +
        </button>

      </div>


      {/* Item Total */}

      <div className="item-total">

        Rs.{" "}

        {(item.price *item.quantity).toLocaleString()}

      </div>


      {/* Remove */}

      <button className="remove-button" onClick={() => {removeFromCart(item.id);  }}>
        Remove
      </button>

    </div>

  );

}


export default CartItem;