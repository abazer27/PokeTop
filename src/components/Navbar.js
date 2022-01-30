/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import pokeball from "./../assets/pokeball.svg"

export default function Navbar() {
  const container = css`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  margin: 1.5rem;
  @media (min-width: 950px) {
    justify-content: end;
  }
  `
  const items = css`
    padding: 0.5rem 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    color: white;
    background: #6C0BA9;
    width: 6rem;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
  `
  const pokeImg = css`
    width: 2rem;
    margin-left: -2rem;
  `
  return (
    <div css={container}>
      <Link css={items} to='/'>
        <img src={pokeball} alt='pokeball' css={pokeImg} />
        PokéDEX
      </Link>
      <Link css={items} to='/my-pokemon'>
        <img src={pokeball} alt='pokeball' css={pokeImg} />
        My Pokémon
      </Link>

    </div>
  );
}
