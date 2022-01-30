/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

export function PokemonList({ pokemon }) {
  const grid = css`
    margin: 1em;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    border: 0.5rem solid #2774ba;
    background: rgba(255,204,1,0.8);
    @media (min-width: 950px) {
      width: 40%;
    }
  `;
  const header = css`
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  `
  const name = css`
    text-transform: capitalize;
    font-size: 1.2rem;
    font-family: MONOSPACE;
  `
  const details = css`
    text-decoration: none;
    border: solid 1px;
    padding: 0.5rem;
    color: white;
    background: #2774ba;
    margin-right: 1rem;
  `
  const desktop = css`
  @media (min-width: 950px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  `
  return (
    <div>
      <p css={header}>PokéDEX</p>
      <div css={desktop}>
        {pokemon && pokemon.map((poke) => {
          return (
            <div
              key={poke.id}
              css={grid}
            >
              <img
                src={poke.image}
                alt={poke.name}
              />
              <p css={name}>{poke.name}</p>
              <Link to={"/pokemon-detail/" + poke.name} css={details}>Details</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}