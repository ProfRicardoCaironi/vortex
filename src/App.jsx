import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { gamesData } from "./data/games";
import { GameCard } from "./components/GameCard";
import "./App.css";

function App() {
  return (
    <div className="vortex-app">
      <Sidebar />

      <main className="vortex-main">
        <Header />
        <div className="vortex-content">
          <h2 className="section-title">Jogos Recentes</h2>
          <div className="vortex-grid">
            {gamesData.map((g) => (
              <GameCard
                key={g.id}
                title={g.title}
                category={g.category}
                banner={g.banner}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
