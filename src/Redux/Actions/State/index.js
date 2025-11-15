import { STATE } from "../../ActionType/State";

export const state = (payload) => {
  return {
    type: STATE,
    payload,
  };
};
