import { GET_CARS } from "./Action-types";

const initialState = {
  cars: [],
  allcars: [],
  detail: {},
  users: [],
  usersDetails: [],
  loading: true,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        allcars: action.payload,
        loading: false,
      };
  }
}
