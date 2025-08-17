import React, { useEffect, useState } from 'react';
import player from '../../assets/defualtPlayer.png';
import './Map.css';

const MOVE_AMOUNT = 20;

const Map: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: KeyboardEvent) => {
      let { x, y } = pos;
      if (e.key === 'w' || e.key === 'ArrowUp') y -= MOVE_AMOUNT;
      if (e.key === 's' || e.key === 'ArrowDown') y += MOVE_AMOUNT;
      if (e.key === 'a' || e.key === 'ArrowLeft') x -= MOVE_AMOUNT;
      if (e.key === 'd' || e.key === 'ArrowRight') x += MOVE_AMOUNT;
      setPos({ x, y });
    };
    window.addEventListener('keydown', move);
    return () => window.removeEventListener('keydown', move);
  }, [pos]);

  return (
    <div
      className="map"
      style={{ backgroundPosition: `${-pos.x}px ${-pos.y}px`, backgroundRepeat: 'repeat' }}
    >
      <img
        src={player}
        alt="Player"
        id="player"
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default Map;