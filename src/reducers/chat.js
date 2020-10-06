import { SEND_MESSAGE, REAL_TIME_MESSAGES } from '../actions/types';

const initialState = {
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };

    case REAL_TIME_MESSAGES:
      return {
        ...state,
        messages: [...action.payload, ...state.messages].filter(
          (mess, index, self) =>
            index === self.findIndex((m) => m.id === mess.id)
        ),
      };

    default:
      return state;
  }
};
