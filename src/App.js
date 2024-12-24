import { useState, useEffect } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatCards from "./components/CatCards";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [displayCount, setDisplayCount] = useState(45); 

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); 
        setCats(
          data.map((cat) => ({
            id: cat.id,
            name: cat.name,
            description: cat.description || "No description available.",
            weight: cat.weight?.metric || "Weight info not available",
            origin: cat.origin || "Unknown",
            temperament: cat.temperament || "Not available",
            image: cat.image?.url || `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
          }))
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id);
      } else {
        updatedFavorites.add(id);
      }
      return updatedFavorites;
    });
  };

  const filteredCats = favoritesOnly
    ? cats.filter((cat) => favorites.has(cat.id))
    : cats;

  // Limit the number of displayed cards
  const displayedCats = filteredCats.slice(0, displayCount);

  return (
    <div className="app">
      <Header favoritesOnly={favoritesOnly} setFavoritesOnly={setFavoritesOnly} />
      <main className="container my-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {displayedCats.map((cat) => (
            <div className="col" key={cat.id}>
              <CatCards
                cat={cat}
                isFavorite={favorites.has(cat.id)}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

