import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Login.css'; // Asegúrate de importar el CSS

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de inicio de sesión
    console.log("Iniciando sesión...", formData);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Lógica para manejar la recuperación de contraseña
    console.log("Recuperación de contraseña...");
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="login-button">Ingresar</button>
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password" onClick={handleForgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>
          <Link to="/register">¿No tienes cuenta? Regístrate aquí</Link> {/* Enlace a la página de registro */}
        </div>
      </form>
    
    </div>
  );
}

export default Login;
