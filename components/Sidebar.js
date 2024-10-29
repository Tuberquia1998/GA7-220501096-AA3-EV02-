import React from 'react';
import './Sidebar.css'; // Estilos del sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Opciones</h3>
      <ul>
        <li><a href="/comprar">Comprar</a></li>
        <li><a href="/vender">Vender</a></li>
        <li><a href="/perfil">Perfil</a></li>
        <li><a href="/soporte">Soporte</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

