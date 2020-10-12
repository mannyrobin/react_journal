import { SET_FEELING_DATA, SAVE_FEELING } from '../actions/actionTypes';

export const setFeelingData = (data) => ({
  type: SET_FEELING_DATA,
  payload: data,
});

export const saveFeeling = (feeling) => ({
  type: SAVE_FEELING,
  payload: feeling,
});
