import Constants from '../constants';
import  { combineReducers} from 'redux';

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
      return state.filter(skiDay => skiDay.date !== action.payload);

    default:
      return state;
  }
};

export const fetching = (state = false , action) => {

  switch (action.type) {
    case Constants.FETCH_RESORT_NAMES:
      return true;
    case Constants.CANCEL_FETCHING:
      return false;
    case Constants.CHANGE_SUGGESTIONS:
      return false;
    default:
      return state;
  }
};

export const suggestions = (state = [] , action) => {
  switch (action.type) {
    case Constants.CLEAR_SUGGESTIONS:
      return [];
    case Constants.CHANGE_SUGGESTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  allSkiDays,
  goal,
  errors,
  resortNames: combineReducers({
    fetching,
    suggestions
  })
})
