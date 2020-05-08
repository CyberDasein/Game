const initialState = {
  isGenerate: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return { ...state, isGenerate: true };
    case 'HIDE_LOADER':
      return { ...state, isGenerate: false };
      
    default:
      return state;
  }
};
