import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { GameCard } from "./components/GameCard";
import { gamesData} from "./data/games";
import { GameModal } from "./components/GameModal"; //Importa o componente GameModal
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("dash");
  const [favorites, setFavorites] = useState([]); 
  
  // 2. Estado para o Modal (null significa modal fechado)
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = gamesData
    .filter((g) => activeTab === "dash" || favorites.includes(g.id)) 
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  const toggleFavorite = (id) => {
   
    setFavorites((prev) =>
    
      prev.includes(id)
        ? 
          prev.filter((favId) => favId !== id)
        : 
          [...prev, id],
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">
        <Header search={search} setSearch={setSearch} />

        <div className="vortex-content">
          <h2 className="section-title">
            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorites" && "Favoritos"}
            {activeTab === "profile" && "Perfil"}
          </h2>

          <div className="vortex-grid">
            {filteredGames.length > 0 ? (
              filteredGames.map((g, index) => (
                <GameCard
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  index={index}
                  isFavorite={favorites.includes(g.id)}
                  onFavorite={() => toggleFavorite(g.id)}

                  //Dispara o modal dentro do Card selecionado
                  onPlay={() => setSelectedGame(g)}
                />
              ))
            ) : (
              <p
                style={{
                  color: "#94a3b8",
                  gridColumn: "1/-1",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                {activeTab === "favorites"
                  ? "Você ainda não favoritou nenhum jogo."
                  : "Nenhum jogo encontrado."}
              </p>
            )}
          </div>
        </div>
      </main>

      {/* 4. Renderização Condicional do Modal */}
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}

export default App;
