import './Sidebar.css'
import { LayoutDashboard, Gamepad2, User } from 'lucide-react';

export function Sidebar({activeTab, setActiveTab}){
    return(
        <aside className="vortex-sidebar">
            <h2 className="logo">VORTEX_</h2>

            <nav>
                <div className= {`nav-item ${activeTab === 'dash' ? 'active' : ''}`} onClick={() => setActiveTab('dash')} >

                     <LayoutDashboard size={20} />Dashboard</div>

                <div className= {`nav-item ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')} >

                    <Gamepad2 size={20} />Meus Jogos</div>

                <div className= {`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')} >

                    <User size={20} />Perfil</div>

            </nav>

        </aside>
    )
}

