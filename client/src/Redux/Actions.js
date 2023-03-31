import axios from "axios";
import { GET_CARS } from "./Action-types";

export function getCars() {
  return function (dispatch) {
    axios
      .get(`/cars`)
      .then((response) => response.data)
      .then((response) => {
        dispatch({ type: GET_CARS, payload: response });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
