import { SET_FEELING_DATA, SAVE_FEELING } from '../actions/actionTypes';
import moment from 'moment';

const initFeelings = () => {
  const startDate = moment().startOf('month');
  const endDate = moment();

  const feelings = {};
  while (startDate.add(1, 'days').diff(endDate) < 0) {
    const formats = {
      sameDay: '[Today]',
      lastWeek: 'MMM, DD',
      lastDay: '[Yesterday]',
      sameElse: 'MMM, DD',
    };

    const date = startDate.clone().calendar(formats);

    feelings[date] = {
      rate: 0,
      description: '',
    };
  }

  return feelings;
};

const initDetail = {
  date: 'Today',
  rate: 0,
  description: '',
};

const initialState = {
  feelings: initFeelings(),
  detail: initDetail,
};

export default function feelsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEELING_DATA:
      return { ...state, detail: action.payload };

    case SAVE_FEELING:
      const data = action.payload;

      return {
        ...state,
        feelings: { ...state.feelings, [data.date]: data },
      };

    default:
      return state;
  }
}
