import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Register.css'; // Estilos específicos para el registro

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar al usuario
    console.log('Registro exitoso:', formData);
  };

  return (
    <div className="register-container">
      <h2>Registro en Cafe App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]*" // Solo acepta números
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
        <Link to="/login">¿Ya tienes una cuenta? Ingresa aquí</Link> {/* Enlace a la página de inicio de sesión */}
      </form>
     
    </div>
  );
}

export default Register;

