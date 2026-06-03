import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { GameCard } from "./components/GameCard";
import { gamesData } from "./data/games";
import { GameModal } from "./components/GameModal";
import { SwiperSlide } from "swiper/react";
import Slider from "./components/Slider";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("dash");
  const [favorites, setFavorites] = useState([]);

  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = gamesData
    .filter((g) => activeTab === "dash" || favorites.includes(g.id))
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  const toggleFavorite = (id) => {
    const game = gamesData.find((g) => g.id === id);
    const gameTitle = game ? game.title : "Jogo";

    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      toast.info(`${gameTitle} removido dos favoritos `, { theme: "dark" });
    } else {
      toast.success(`${gameTitle} adicionado dos favoritos!❤️`, {
        theme: "dark",
      });
    }

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
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

  const sliderSettings = {
    slidesPerView: 1,
  };

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">
        <Header search={search} setSearch={setSearch} />

        {activeTab === "dash" && (
          <div className="container-slider">
            <Slider settings={sliderSettings}>
              {gamesData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="slide-content">
                    <img src={slide.banner} alt={slide.title} />
                    <div
                      className="slide-overlay"
                      style={{
                        borderBottom: `8px solid ${slide.color}`,
                      }}
                    >
                      <span>{slide.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        )}

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

      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;
