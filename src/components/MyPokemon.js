/** @jsxImportSource @emotion/react */

import React ,{ useState } from 'react';
import { css } from '@emotion/react';
import pokeball from "./../assets/pokeball.svg"

export function MyPokemon() {
  const [release, setRelease] = useState(false)
  const keys = Object.keys(localStorage)
  let data = []

  const handlePokemon = () => {
    for (let i = 0; i < keys.length; i++) {
      let pokemon = localStorage.getItem(keys[i]);
      pokemon = data.push(JSON.parse(pokemon));
    }
  }
  // If you want to delete data after reload page
  // const handleRelease = (e) => {
  //   localStorage.removeItem(e)
  //
  //put into button
  // onClick={() => { handleRelease(poke.nickname) }}
  // }

  const handleRelease = (e) => {
    let newData = JSON.parse(localStorage.getItem(e));
    newData.release = true
    localStorage.setItem(e, JSON.stringify(newData))
    setRelease(true)
  }
  handlePokemon()
  const grid = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
  const desktop = css`
    font-family: Pokemon;
    text-transform: capitalize;
    @media (min-width: 950px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `
  const child = css`
    display: flex;
    flex-wrap: nowrap;
    width: 40%;
    align-items: center;
    justify-content: space-around;
  `
  const button = css`
    text-decoration: none;
    border: solid 1px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    color: white;
    background: #2774ba;
    margin-right: 1rem;
  `
  const danger = css`
    color: red;
  `
  const deleteData = css`
    background: red;
    border: 0.5rem solid red;
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  `
  const container = css`
    display: flex;
    flex-direction: column;
  `
  return (
    <div css={container}>
      <div css={header}>My Pokémon</div>
      <div css={desktop}>
        {data.map((poke) => {
          return (
            <div key={poke.nickname} css={grid}>
              <img src={poke.sprites.front_default} alt={poke.name} css={child} />
              <div css={child}>
                <div>
                  <p>NickName : {poke.nickname}</p>
                  <p>Pokemon : {poke.name}</p>
                </div>
              </div>
              <div css={child}>
                {poke?.types.map((data, index) => {
                  return (
                    <p
                      key={index}
                      css={css`
                        background: #a5a5c3;
                        padding: 0.5rem;
                        border-radius: 0.5rem;
                        `}
                    >
                      {data.type.name}
                    </p>
                  )
                })}
              </div>
              <div css={child}>
                <img src={pokeball} alt="pokeball" css={css`width:35px`} />
              </div>
              {poke.release ?
                <p css={danger}>Pokemon has Been Release</p>
                :
                <button onClick={() => { handleRelease(poke.nickname) }} css={button}>Release Pokemon ?</button>
              }

            </div>
          )
        })}
      </div>
      <button onClick={() => { localStorage.clear() }} css={deleteData}>DELETE ALL POKEMON DATA</button>
    </div>
  );
}
