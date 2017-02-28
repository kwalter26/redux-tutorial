import Constants from './constants';
import {allSkiDays,goal} from './initialState.json';

console.log(`

  Ski Day Counter
  ==================
  The goal is ${goal} days 
  Initally there are ${allSkiDays.length} ski days in state

  ==================
  ${Object.keys(Constants).join('\n      ')}

`)