import "./Header.css";
import { Bell, Zap, Search } from "lucide-react";

export function Header({ search, setSearch }) {
  return (
    <header className="vortex-header">
      <div className="user-info">
        <h3>
          Bem-vindo, <span className="destaque">Ricardo</span>
        </h3>
        <p>Status: Online no Level 01</p>
      </div>

      <div className="search-bar">
        <Search size={18} color="#94a3b8" />
        <input
          type="text"
          placeholder="Buscar jogo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="header-actions">
        <div className="badge">
          <Zap size={14} />
          <span>PRO PLAYER</span>
        </div>
        <button className="notification-btn">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}
