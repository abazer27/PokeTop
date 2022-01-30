/** @jsxImportSource @emotion/react */

import React ,{ useState }from "react";
import { CatchPoke } from "./CatchPoke";
import { css } from "@emotion/react";
import { theme } from "../assets/Theme";

export function PokemonDetail({ detail }) {
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }
  const sprites = css`
    width: 30vh;
    height: 30vh;
  `
  const cardContainer = css`
    display: grid;
    justify-content: center;
    border: 0.5rem solid black;
    margin: 0 1rem;
    padding: 0 1rem 2rem 1rem;
  `
  const type = css`
    display: flex;
    align-content: stretch;
    justify-content: space-evenly;
  `
  const color = theme.color.type.bug
  const capitalize = css`
    text-transform: capitalize;
    font-family: Pokemon;
  `
  const body = css`
    display: flex;
    gap: 2rem;
  `
  const nullMargin = css`
    margin: 0;
  `
  const button = css`
    margin: 1rem 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 950px) {
      display: grid;
      gap: 2rem;
      justify-items: center;
    }
  `
  const catchButton = css`
    display:inline-block;
    border: 1px solid #801515;
    background-color: #d01515;
    color: #FFFFFF;
    text-align: center;
    border-radius: 50%;
    width: 55px;
    height: 55px;
  `
  const container = css`
    @media (min-width: 950px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;
    }
  `
  return (
    <div css={container}>
      <div css={cardContainer}>
        <img
          src={detail?.sprites.front_default}
          alt={detail?.name}
          css={sprites}
        />
        <div css={capitalize}>
          <div
            css={type}>
            {detail?.types.map((data, index) => {
              return (
                <div
                  key={index}
                  css={css`
                  background: ${color};
                  padding: 0.5rem;
                  `}
                >
                  {data.type.name}
                </div>
              )
            })}
          </div>
          <p>Name : {detail?.name}</p>
          <div>
            {detail?.stats.map((data, index) => {
              return (
                <div
                  key={index}
                >
                  <p>{data.stat.name} : {data.base_stat}</p>
                </div>
              )
            })}
          </div>
          <div css={body}>
            <p css={nullMargin}>Height : {detail?.height}</p>
            <p css={nullMargin}>Weight : {detail?.weight}</p>
          </div>
        </div>
      </div>
      <div css={button}>
        <button onClick={handleModal} css={catchButton} >{modal ? 'Cancel' : 'Catch'}</button>
        {modal ?
          <CatchPoke data={detail} modal={handleModal}/> : null}
      </div>
    </div>
  )
}