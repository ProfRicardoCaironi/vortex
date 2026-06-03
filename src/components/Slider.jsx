import { Swiper, SwiperSlide } from "swiper/react"; // Importa os componentes principais do Swiper

// Importa os módulos extras do Swiper
import {
  Navigation, // Botões de navegação
  Pagination, // Paginação (bolinhas)
  Scrollbar, // Barra de rolagem
  A11y, // Acessibilidade
  Autoplay, // Troca automática de slides
  EffectFade, // Efeito fade
} from "swiper/modules";

import "swiper/css"; // Importa os estilos básicos do Swiper
import "swiper/css/effect-fade"; // Importa o CSS do efeito fade
import "swiper/css/navigation"; // Importa o CSS da navegação
import "swiper/css/pagination"; // Importa o CSS da paginação
import "./slider.css"; // Importa o CSS personalizado

const Slider = ({ settings, children }) => {// Componente Slider
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]} // Registra os módulos utilizados
      effect={"fade"} // Define o efeito de transição
      fadeEffect={{ crossFade: true }} // Faz o fade ficar mais suave
      speed={1000} // Tempo da animação (1 segundo)
      loop={true} // Faz os slides repetirem infinitamente
      centeredSlides={true} // Centraliza o slide ativo
      grabCursor={true} // Mostra cursor de arrastar
      navigation={true} // Ativa os botões de navegação
      pagination={{
        // Configura a paginação
        clickable: true, // Permite clicar nas bolinhas
        dynamicBullets: true, // Bolinhas dinâmicas
      }}
      // Configuração do autoplay
      autoplay={{
        delay: 3000, // Troca a cada 3 segundos
        disableOnInteraction: false, // Continua após interação
      }}
      {...settings} // Permite sobrescrever configurações
    >
      {/* Renderiza os slides recebidos */}
      {children}
    </Swiper>
  );
};

export default Slider;