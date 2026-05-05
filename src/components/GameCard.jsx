import "./GameCard.css";
import { Play, Heart } from "lucide-react"; 

export function GameCard({
  title,
  category,
  banner,
  index,
  isFavorite,
  onFavorite,
  onPlay,//Passa o props do onPlay
}) {
  
  return (
    <div
      className="vortex-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <img src={banner} alt={title} className="card-img" />

     
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={onFavorite}
      >
        <Heart
          size={18}
          fill={isFavorite ? "#7c3aed" : "transparent"}
          stroke={isFavorite ? "#7c3aed" : "white"}
        />
      </button>

      <div className="card-info">
        <h4>{title}</h4>
        <p>{category}</p>

        {/* Coloca o onClick={onPlay} no botão do card */}
        <button className="play-btn" onClick={onPlay}>
          
          <Play size={14} fill="white" /> Jogar 
        </button>
      </div>
    </div>
  );
}
