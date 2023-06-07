import { CHANGE_CARD_HOLDER, CHANGE_NUMBER_CARD, CHANGE_EXPIRATION_DATE,CHANGE_CCV } from "../reduxConstants/cardConstants";

export const changeNumberCard = (number) => ({
  type: CHANGE_NUMBER_CARD,
  payload: number,
});

export const changeCardHolder = (name) => ({
  type: CHANGE_CARD_HOLDER,
  payload: name,
});

export const changeExpirationDate = (date) => ({
  type: CHANGE_EXPIRATION_DATE,
  payload: date,
});

export const changeCcv= (ccv) => ({
  type: CHANGE_CCV,
  payload: ccv,
});
