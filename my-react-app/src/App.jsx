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

 import ProfilePage from "./pages/ProfilePage";
import TodoPage from "./pages/TodoPage";
import ProductPage from "./pages/ProductPage";
import "./app.css"
 

function App() {

  return (
    <div>

      {/* <ProfilePage />

      <hr /> */}

      {/* <TodoPage />

      <hr /> */}

      <ProductPage />

    </div>
  );
}

export default App;