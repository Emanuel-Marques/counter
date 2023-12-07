type ActionType = {
  type: string,
  playload: number
}

const INITIAL_STATE = {
  count: 0,
  clicks: 0
}

const counterReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { 
        ...state,
        count: state.count + action.playload }
      case 'INCREMENT_CLICKS':
        return {
          ...state,
          clicks: state.clicks + 1,
        };
    default:
      return state;
  }
};

export default counterReducer;