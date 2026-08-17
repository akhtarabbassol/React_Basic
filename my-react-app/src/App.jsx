// import Counter from '../src/components/Counter';

// function App(){
//   return (
//     <div>
//       <h1>Welcome to the Counter App </h1>
//       <Counter />
//       <Counter title="count 1" />
//       <Counter title="count 2" />
//       <Counter title="count 3" />
//     </div>
//   )
// }

// export default App;

//  import Header from "./components/Cart/Header";

// import ProductPage from "./pages/ProductPage";

// import CartPage from "./pages/CartPage";

// import { CartProvider } from "./context/CartContext";

// import "./App.css";


// function App() {   

//   return (

//     <CartProvider>

//       <div className="app">

//         <Header />

//         <ProductPage />

//         <CartPage />

//       </div>

//     </CartProvider>

//   );

// }


// export default App;
 




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Cart/Header";
import ProductPage from "./pages/CartPage";
import Cart from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<ProductPage />}/>

        <Route path="/cart" element={<Cart />}/>

      </Routes>

    </BrowserRouter>
  );
};

export default App;