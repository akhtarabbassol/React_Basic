// import CartItem from "../components/Cart/CartItem";

// import { useCart } from "../context/CartContext";


// function CartPage() {

//   const {
//     cart,
//     subtotal,
//     total
//   } = useCart();


//   return (

//     <main className="cart-page">

//       <h1>
//         Shopping Cart
//       </h1>


//       {cart.length === 0 ? (

//         <div className="empty-cart">

//           <h2>
//             Your cart is empty
//           </h2>

//           <p>
//             Add some products to your cart.
//           </p>

//         </div>

//       ) : (

//         <div className="cart-layout">


//           {/* Cart Items */}

//           <div className="cart-items">

//             {cart.map((item) => (

//               <CartItem
//                 key={item.id}
//                 item={item}
//               />

//             ))}

//           </div>


//           {/* Summary */}

//           <div className="cart-summary">

//             <h2>
//               Cart Summary
//             </h2>


//             <div className="summary-row">

//               <span>
//                 Subtotal
//               </span>

//               <strong>
//                 Rs.{" "}
//                 {subtotal.toLocaleString()}
//               </strong>

//             </div>


//             <div className="summary-row total-row">

//               <span>
//                 Total
//               </span>

//               <strong>
//                 Rs.{" "}
//                 {total.toLocaleString()}
//               </strong>

//             </div>


//             <button className="checkout-button">
//               Checkout
//             </button>

//           </div>

//         </div>

//       )}

//     </main>

//   );

// }

// import { useCart } from "../context/CartContext";
// import CartItem from "../components/Cart/CartItem";

// const Cart = () => {
//   const {
//     cart,
//     subtotal,
//     total,
//   } = useCart();

//   if (cart.length === 0) {
//     return (
//       <div>
//         <h1>Your Cart</h1>
//         <p>Your cart is empty.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Your Cart</h1>

//       {cart.map((item) => (
//         <CartItem
//           key={item.id}
//           item={item}
//         />
//       ))}

//       <div>
//         <h3>
//           Subtotal: Rs. {subtotal}
//         </h3>

//         <h2>
//           Total: Rs. {total}
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Cart;





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