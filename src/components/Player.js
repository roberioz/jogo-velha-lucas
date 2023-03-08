import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Player() {
  const {
    state: { isXNext },
  } = useContext(GameContext);

  return <h1><h2>Jogo da Velha do Anão</h2>Jogador: {isXNext ? '1 é X' : '2 é O'}</h1>;
}
