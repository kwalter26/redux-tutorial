import Constants from '../constants';

export const goal = (state = 10 , action) => (action.type == Constants.SET_GOAL) ?
  parseInt(action.payload) :
  state;

export const skiDay = (state = null , action) => (action.type == Constants.ADD_DAY) ?
  action.payload :
  state;

export const errors = (state = [] , action) => {
  switch (action.type) {
    case Constants.ADD_ERROR:
      return [
        ...state,
        action.payload
      ];
    case Constants.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload);
    default:
      return state;
  }
};

export const allSkiDays = (state = [] , action) => {

  switch (action.type) {
    case Constants.ADD_DAY:
      const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date);
      return (hasDayAlready) ?
        state :
        [
          ...state,
          skiDay(null, action)
        ];
    case Constants.REMOVE_DAY:
      return state.filter(skiDay => skiDay.date !== action.payload)

    default:
      return state;
  }
};
