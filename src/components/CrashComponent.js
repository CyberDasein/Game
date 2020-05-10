import React from "react";
import style from "./betForm.module.css";
import { connect } from "react-redux";
import {
  setBetValue,
  setResults,
  removeResult,
  changeBalanse,
  endGame,
  restartGame,
} from "../redux/actions";
import ResultGenerate from "./result/ResultGenerate";
import EndGameModal from "./EndGameModal"

class CrashComponent extends React.Component {
  state = {
    bet: "",
    randomNumber: "",
    results: [],
  };

  randomGenerate = (e) => {

    let random = (min, max) => {
      let rand = min + Math.random() * (max + 1) ;
      return Math.round(rand * 10) / 10;
    };

    let resultCalc = (bet, randomNumber) => {
      if (bet !== 0 && bet >= randomNumber) {
        return {
          result: "успех",
          bet,
          randomNumber,
          koef: bet * randomNumber,
          id: Date.now().toString(),
        };
      }
      if (bet !== 0 && bet < randomNumber) {
        return {
          result: "проигрыш",
          bet,
          randomNumber,
          koef: bet * randomNumber,
          id: Date.now().toString(),
        };
      } else {
        return false;
      }
    };
    let totalResult;
    
    this.setState(
      (state) => {
        return {
          results: [...state.results, totalResult],
          randomNumber: random(1, 10),
        };
      },
      () => {
        this.props.setBetValue(this.state.bet);
        totalResult = resultCalc(this.state.bet, this.state.randomNumber);
        this.props.setResults(totalResult);
      }
    );

    this.props.setBetValue(0);
    
  };
  onBetChange = (e) => {
    if ( e.target.value <= 10 && e.target.value > 0) {
      this.setState({
        bet: e.target.value,
      });
    } else {
      e.target.value = ''
    }
  };
  alertLose = () => {
    
    this.props.endGame()

  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="row bg-secondary">
          <ResultGenerate
            removeResult={this.props.removeResult}
            isGenerate={this.props.isGenerate}
            randomNumber={this.state.randomNumber}
            bet={this.props.bet}
            results={this.props.results}
            setResults={this.props.setResults}
            changeBalanse={this.props.changeBalanse}
            isEndGame={this.props.isEndGame}
          />
          <EndGameModal restartGame={this.props.restartGame} isEndGame={this.props.isEndGame}/>

          <div className="col-12 mb-3">
            <div className={style.form}>
              <div className={style.balanse}>
               Ваш баланс: &nbsp; <span>{this.props.balanse <= 0 ? this.alertLose() && '0'  : this.props.balanse + " " +  "$" }</span>
              </div>
              <input
                className="form-control"
                placeholder="Ваша ставка"
                onChange={this.onBetChange}
                type="number"
              />
              <button
                disabled={this.props.isGenerate || this.props.balanse <= 0 ? true : false}
                className="btn btn-success"
                onClick={this.randomGenerate}
                type="button"
              >
                Start
              </button>
            </div>
            <div class="card text-center">
              <div class="card-header bg-success">
                {" "}
                <strong>Правила</strong>{" "}
              </div>
              <div class="card-body bg-info">
                <p class="card-text text-white">
                  Для того, чтобы начать игру сделайте вашу ставку от 1 до 10, а
                  затем нажмите start. Выйгрыш наступает в том случае, если ваше
                  число (ставка на коэффициент) было больше, чем случайно
                  сгенерированное число(коэффициент). Тогда, сумма баланса
                  увеличивается на сумму вашей ставки, умноженной на случайно
                  сгенерированный коэффициент (число). Если ставка оказалась
                  меньше случайного сгенерированного числа, то вы теряете
                  соответствующую сумму.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bet: state.bet.betValue,
  randomNumber: state.bet.randomNumber,
  initNumber: state.bet.initNumber,
  balanse: state.bet.balanse.toFixed(1),
  results: state.bet.results,
  isGenerate: state.app.isGenerate,
  isEndGame: state.bet.isEndGame,
});

const mapDispatchToProps = {
  setBetValue,
  setResults,
  removeResult,
  changeBalanse,
  endGame,
  restartGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(CrashComponent);
