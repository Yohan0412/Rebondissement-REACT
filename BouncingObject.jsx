// BouncingObject.js
import React, { useState, useEffect } from 'react';
import './BouncingObject.css';

const BouncingObject = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ vx: 3, vy: 2 }); // Vitesse de déplacement
  const containerWidth = 200; // Largeur du conteneur
  const containerHeight = 400; // Hauteur du conteneur
  const objectSize = 50; // Taille de l'objet

  // Fonction pour mettre à jour la position de l'objet à chaque rafraîchissement
  useEffect(() => {
    const updatePosition = () => {
      // Nouvelles positions calculées
      let newX = position.x + velocity.vx;
      let newY = position.y + velocity.vy;

      // Vérification des limites du conteneur pour rebondir
      if (newX <= 0 || newX >= containerWidth - objectSize) {
        setVelocity((prevVelocity) => ({ ...prevVelocity, vx: -prevVelocity.vx }));
      }
      if (newY <= 0 || newY >= containerHeight - objectSize) {
        setVelocity((prevVelocity) => ({ ...prevVelocity, vy: -prevVelocity.vy }));
      }

      // Mettre à jour la position
      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(updatePosition, 30); // Rafraîchir toutes les 30 ms
    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [position, velocity, containerWidth, containerHeight]);

  return (
    <div className="bouncing-object" style={{ left: position.x, top: position.y }}>
      Ice
    </div>
  );
};

export default BouncingObject;
