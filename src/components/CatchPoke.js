/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import pokeball from "./../assets/pokeball.svg"
import { css } from "@emotion/react";

export function CatchPoke({ data, modal }) {
  const [isCatch, setCatch] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [giveName, setGiveName] = useState(false)
  const [nickName, setNickName] = useState('')
  const [notif, setNotif] = useState(null)

  const catchPokemon = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const number = Math.random();
        if (number > 0.5) {
          resolve(setPokemon(data));
        } else {
          reject(new Error(`${data?.name} run!!!!`))
        }
      }, 1000)
    })
  }
  const handleCatch = () => {
    if (!isCatch) {
      setCatch(true);
      catchPokemon()
        .then(() => {
          console.log('Gotcha!')
          setGiveName(true)
          setNotif(true);
        })
        .catch((err) => {
          console.error(err);
          setNotif(false)
        })
        .finally(() => {
          setCatch(false);
        });
    }
  }
  const handleNickName = () => {
    setGiveName(false)
    const nickNames = { nickname: nickName, release: false }
    const pokemons = Object.assign(nickNames, pokemon)
    localStorage.setItem(nickName, JSON.stringify(pokemons))
    modal();
  }

  // const handleNotif = () => {
  //   setTimeout(() => {
  //     setNotif(null)
  //   }, 2000);
  // }
  useEffect(() => {
    setTimeout(function() {
      setNotif(null)
         }, 3000);
  },
  [])
  const pokeImg = css`
    width: 55px;
    height: 55px;
  `
  const header = css`
    margin: 0;
  `
  const input = css`
    border: 2px solid black
  `
  const button = css`
    background: #4dc34d;
    margin-left: 1rem;
    border-radius: 30% 10%;
  `
  const notifCatch = css`
    z-index: 9;
    top: 23rem;
    left: 2.2rem;
    position: absolute;
    font-size: 3rem;
    width: 20rem;
    border: 3px solid #2774ba;
    text-align: center;
    background: rgba(255,204,1,0.8);
    opacity: 0.7;
    transition: auto;
    @media (min-width: 950px) {
      width: 20%;
      top: 1rem;
      left: 41.25%;
    }
  `
  return (
    <div>
      {notif !== null ? 
        <div css={notifCatch}>
          {notif ?
          <div>Finally!!!</div> 
          : 
          <div>Pokemon Run!</div>}
        </div>
      : ''}
      {giveName ? '' : <div>
        <img
          src={pokeball}
          onClick={()=>{handleCatch()}}
          css={pokeImg}
          alt="pokeball"
        />
      </div>}
      {giveName ? 
      <div>
        <p css={header}>Gotcha!   Give NickName!!</p>
        <input type='text' value={nickName} onChange={(e) => setNickName(e.target.value)} css={input}/>
        <button onClick={handleNickName} css={button}>OK</button>
      </div> : ''}
    </div>
  )
}
