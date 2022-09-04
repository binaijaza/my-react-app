import "./App.css";
import PokemonPage from "./pages/PokemonPage";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pokemons from "./pages/Pokemons";
import Contact from "./pages/Contact";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <div>
      <NavigationBar />
      {/* decalre my routes (pages) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/user/:id" element={<UserPage />} />

        <Route path="/pokemon/:id" element={<PokemonPage />} />

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </div>
  );
}

export default App;
