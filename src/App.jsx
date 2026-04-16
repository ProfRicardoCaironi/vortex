import { useState, useEffect } from "react"; //importei o useEffect
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { gamesData } from "./data/games";
import { GameCard } from "./components/GameCard";
import AOS from 'aos'; //importei o AOS
import "aos/dist/aos.css"; //Importei o CSS da Biblioteca AOS
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("dash");

  const filteredGames = gamesData
    .filter(() => activeTab === "dash")
    .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:false,
      easing: "ease-in-out",
    })
  },[]);


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
              filteredGames.map((g, index) => (//passei o index como parametro
                <GameCard
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  index={index} // Coloco o index dentro do Card
                />
              ))
            ) : (
              <p style={{ color: "#94a3b8" }}>Nenhum jogo encontrado...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
