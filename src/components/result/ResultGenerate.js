import React from "react";
import style from "./result.module.css";
import styled from "styled-components";
import Results  from "./results";

const Loader = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  .item {
    width: 60px;
    height: 60px;
    position: absolute;

    &.item-1 {
      background-color: #fa5667;
      top: 0;
      left: 0;
      z-index: 1;
      animation: item-1_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
    }

    &.item-2 {
      background-color: #7a45e5;
      top: 0;
      right: 0;
      animation: item-2_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
    }

    &.item-3 {
      background-color: #1b91f7;
      bottom: 0;
      right: 0;
      z-index: 1;
      animation: item-3_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
    }

    &.item-4 {
      background-color: #fac24c;
      bottom: 0;
      left: 0;
      animation: item-4_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
    }
    @keyframes item-1_move {
      0%,
      100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(0, 100px);
      }
      50% {
        transform: translate(100px, 100px);
      }
      75% {
        transform: translate(100px, 0);
      }
    }

    @keyframes item-2_move {
      0%,
      100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(-100px, 0);
      }
      50% {
        transform: translate(-100px, 100px);
      }
      75% {
        transform: translate(0, 100px);
      }
    }

    @keyframes item-3_move {
      0%,
      100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(0, -100px);
      }
      50% {
        transform: translate(-100px, -100px);
      }
      75% {
        transform: translate(-100px, 0);
      }
    }

    @keyframes item-4_move {
      0%,
      100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(100px, 0);
      }
      50% {
        transform: translate(100px, -100px);
      }
      75% {
        transform: translate(0, -100px);
      }
    }
  }
`;

const ResultGenerate = (props) => {
  const { bet, randomNumber, results, setResults, isGenerate, removeResult, isEndGame } = props;


  return (
    <>
      <div className="col-md-4">
        <Results
          results={results}
          bet={bet}
          setResults={setResults}
          randomNumber={randomNumber}
          removeResult={removeResult}
        />
      </div>

      <div className="col">
        <div className={style.alertWrap}>
          {isGenerate ? (
            <Loader>
              <div className="item item-1"></div>
              <div className="item item-2"></div>
              <div className="item item-3"></div>
              <div className="item item-4"></div>
            </Loader>
          ) : (
            <div className={style.result}>Ваш коэффициент: &nbsp; {isEndGame ? false: randomNumber}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResultGenerate;
