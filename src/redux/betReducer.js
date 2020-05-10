
const initialState = {
    betValue: '',
    balanse: 10,
    isEndGame: false,
    results: [
    ]
  };
  
export const betReducer = (state = initialState, action) => {

    switch (action.type) {
      case 'SET_BET_VALUE':
        return {
          ...state,
          betValue: action.payload,
        };
  
      case 'CHANGE_BALANSE':
        return {
          ...state,
          balanse: state.balanse + action.payload 
        };
      case 'END_GAME':
        return {
          ...state,
          balanse: 0,
          isEndGame: true,
        };
      case 'RESTART_GAME':
        return {
          ...state,
          balanse: 10,
          isEndGame: false,
        };
      case 'SET_RESULTS':
        return {
          ...state,
          results: [...state.results, action.payload]
        };
      case 'REMOVE_RESULT':
        return {
          ...state,
          results: state.results.filter((result) => result.id !== action.payload)
        };
      case 'SET_IS_GENERATE':
        return {
          ...state,
          isGenerate: action.payload,
        };
      default:
        return state;
    }
  };
