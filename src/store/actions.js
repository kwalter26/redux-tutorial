import Constants from '../constants';

export const addDay = (resort,date,powder=false,backcountry=false) =>{
  return{
    type: Constants.ADD_DAY,
    payload:{resort,date,powder,backcountry}
  }
}

export const removeDay = (date) => ({
  type: Constants.REMOVE_DAY,
  payload: date  
})

export const setGoal = (goal) =>({
  type: Constants.SET_GOAL,
  payload: goal
})