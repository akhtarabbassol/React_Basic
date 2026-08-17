// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find(
//         (item) => item.id === product.id
//       );

//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [
//         ...prevCart,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ];
//     });
//   };

//   // Increase quantity
//   const increaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   // Decrease quantity
//   const decreaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // Remove product
//   const removeFromCart = (id) => {
//     setCart((prevCart) =>
//       prevCart.filter((item) => item.id !== id)
//     );
//   };

//   // Total number of products
//   const cartItemCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   // Subtotal
//   const subtotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   // Total
//   const total = subtotal;

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         increaseQuantity,
//         decreaseQuantity,
//         removeFromCart,
//         cartItemCount,
//         subtotal,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };


import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // =========================
  // ADD PRODUCT TO CART
  // =========================

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      // Product already exists
      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // New product
      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // =========================
  // REMOVE PRODUCT
  // =========================

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  // =========================
  // CART ITEM COUNT
  // =========================

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // =========================
  // TOTAL
  // =========================

  const total = subtotal;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItemCount,
        subtotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};