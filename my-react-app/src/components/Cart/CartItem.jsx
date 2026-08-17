// import { useCart } from "../../context/CartContext";

// const CartItem = ({ item }) => {
//   const {
//     increaseQuantity,
//     decreaseQuantity,
//     removeFromCart,
//   } = useCart();

//   return (
//     <div className="cart-item">

//       <img
//         src={item.image}
//         alt={item.name}
//         width="100"
//       />

//       <div>
//         <h3>{item.name}</h3>

//         <p>Rs. {item.price}</p>

//         <div>
//           <button
//             onClick={() => decreaseQuantity(item.id)}
//           >
//             -
//           </button>

//           <span>{item.quantity}</span>

//           <button
//             onClick={() => increaseQuantity(item.id)}
//           >
//             +
//           </button>
//         </div>

//         <p>
//           Item Total: Rs.{" "}
//           {item.price * item.quantity}
//         </p>

//         <button
//           onClick={() => removeFromCart(item.id)}
//         >
//           Remove
//         </button>
//       </div>

//     </div>
//   );
// };

// export default CartItem;





import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">

        <h2>{item.name}</h2>

        <p>
          Price: Rs. {item.price}
        </p>

        <div className="quantity-control">

          <button
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>

        </div>

        <p className="item-total">
          Item Total: Rs. {itemTotal}
        </p>

        <button
          onClick={() =>
            removeFromCart(item.id)
          }
          className="remove-btn"
        >
          Remove
        </button>

      </div>
    </div>
  );
};

export default CartItem;