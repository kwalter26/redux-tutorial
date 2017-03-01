import Constants from './constants';
import { skiDay } from './store/reducers';

const state = null;

const action = {
  type: Constants.ADD_DAY,
  payload: {
    "resort":"Heavenly",
    "date":"2016-12-16",
    "powder":true,
    "backcountry":false
  }
};

const nextState = skiDay(state, action);

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}

`);
