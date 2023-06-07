import { CHANGE_NUMBER_CARD, CHANGE_CARD_HOLDER, CHANGE_EXPIRATION_DATE, CHANGE_CCV } from "../reduxConstants/cardConstants";

const initialState = {
  numberCard: "1234 **** **** 1234",
  cardHolder: "CARD HOLDER",
  expires: "01/01",
  ccv: "123",
};

function homeReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case CHANGE_NUMBER_CARD: {
      return {
        ...state,
        numberCard: payload,
      };
    }
    case CHANGE_CARD_HOLDER: {
      return {
        ...state,
        cardHolder: payload,
      };
    }
    case CHANGE_EXPIRATION_DATE: {
      return {
        ...state,
        expires: payload,
      };
    }
    case CHANGE_CCV: {
      return {
        ...state,
        ccv: payload,
      };
    }
    default:
      return state;
  }
}

export default homeReducer;
