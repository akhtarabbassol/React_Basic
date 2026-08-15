import { createContext,useContext,useState} from "react";

// CREATE CONTEXT
const CartContext = createContext();
 
// CART PROVIDER
export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct = previousCart.find( (item) => item.id === product.id );


      // Product already exists
      if (existingProduct) {

        return previousCart.map((item) => {

          if (item.id === product.id) {

            return {
              ...item,
              quantity: item.quantity + 1
            };

          }

          return item;

        });

      }


      // New product
      return [
        ...previousCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });

  };
 
  // INCREASE QUANTITY
  const increaseQuantity = (id) => {

    setCart((previousCart) => {

      return previousCart.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity: item.quantity + 1
          };

        }

        return item;

      });

    });

  };

 
  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {

    setCart((previousCart) => {

      return previousCart.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1
          };

        }

        return item;

      });

    });

  };


   
  // REMOVE FROM CART
  const removeFromCart = (id) => {

    setCart((previousCart) => {

      return previousCart.filter(
        (item) => item.id !== id
      );

    });

  };


 
  // CART ITEM COUNT
  const cartItemCount = cart.reduce(
    (total, item) => {
      return total + item.quantity;
    },
    0
  );


  
  // SUBTOTAL
  const subtotal = cart.reduce(
    (total, item) => {

      return total + (
        item.price * item.quantity
      );

    },
    0
  );


 
  // TOTAL
  const total = subtotal;


 
  // PROVIDER
  return (

    <CartContext.Provider
      value={{ cart,addToCart,increaseQuantity,decreaseQuantity,removeFromCart,cartItemCount,subtotal,total}}>

      {children}

    </CartContext.Provider>

  );

}

// CUSTOM HOOK
 

export function useCart() {

  return useContext(CartContext);

}