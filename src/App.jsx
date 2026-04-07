import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { gamesData } from "./data/games";
import { GameCard } from "./components/GameCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState("dash");

  const filteredGames = gamesData
  .filter(() => activeTab === "dash")
  .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">

        <Header search = {search} setSearch={setSearch} />

        <div className="vortex-content">

          <h2 className="section-title">
            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorites" && "Favoritos"}
            {activeTab === "profile" && "Perfil"}
          </h2>

          <div className="vortex-grid">

           {filteredGames.length > 0 ? (
            filteredGames.map((g) => (
               <GameCard
                key={g.id}
                title={g.title}
                category={g.category}
                banner={g.banner}
              />
            ))
           ) : (
            <p style={{color: "#94a3b8"}}>Nenhum jogo encontrado...</p>
           )}
            
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
