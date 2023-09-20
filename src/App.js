import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
