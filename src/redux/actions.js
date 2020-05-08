

export function setBetValue(value) {
  return (dispatch) => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch({ type: "SET_BET_VALUE", payload: value });
      dispatch(hideLoader());
    }, 1500);
  };
}
export function setResults(result) {

  return (dispatch) => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch({ type: "SET_RESULTS", payload: result });
      dispatch(changeBalanse(result.result === "успех" ? result.koef : -result.koef));
      dispatch(hideLoader());
    }, 1000);
  };
}

export function showLoader() {
  return {
    type: "SHOW_LOADER",
  };
}
export function removeResult(id) {
  return {
    type: "REMOVE_RESULT",
    payload: id
  };
}
export function changeBalanse(koef) {
  return {
    type: "CHANGE_BALANSE",
    payload: koef
  };
}
export function endGame() {
  return {
    type: "END_GAME",
  };
}
export function hideLoader() {
  return {
    type: "HIDE_LOADER",
  };
}
