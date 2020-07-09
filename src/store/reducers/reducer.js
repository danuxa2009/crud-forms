import { ADD_ITEM_TO_STORE, EDIT_ITEM } from "../constans/constants";

const initialState = {
  items: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_STORE: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        items: [...state, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
