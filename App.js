import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Slider from 'react-slick';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cafeImage1 from './imagenes/cafe1.jpg';
import cafeImage2 from './imagenes/cafe2.jpg';
import cafeImage3 from './imagenes/cafe3.jpg';
import Register from './components/Register';
import Login from './components/Login';
import AboutUs from './components/AboutUs'; // Importa el nuevo componente AboutUs
import TermsAndConditions from './components/TermsAndConditions'; // Importa el nuevo componente TermsAndConditions

function MainPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Cafe App</h1>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-button">Ingresar</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Registrarse</button>
          </Link>
        </div>
      </header>

      <main className="app-main">
        <h2>Bienvenido!!</h2>
        <p>Disfruta del sabor y la tradición del mejor café de Colombia.</p>
        <Slider {...settings}>
          <div>
            <img src={cafeImage1} alt="cafe1" className="hero-image" />
          </div>
          <div>
            <img src={cafeImage2} alt="cafe2" className="hero-image" />
          </div>
          <div>
            <img src={cafeImage3} alt="cafe3" className="hero-image" />
          </div>
        </Slider>
      </main>

      <footer className="app-footer">
        <ul className="footer-links">
          <li><Link to="/about">Acerca de Nosotros</Link></li>
          <li><Link to="/terms">Términos y Condiciones</Link></li>
        </ul>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} /> {/* Nueva ruta para "Acerca de Nosotros" */}
        <Route path="/terms" element={<TermsAndConditions />} /> {/* Nueva ruta para "Términos y Condiciones" */}
      </Routes>
    </Router>
  );
}

export default App;
