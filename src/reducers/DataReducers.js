import Data from "../Data";

let initialState = { myData: Data };
export const DataReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ITEMS":
      return state.myData;
    case "DELETE_ITEMS":
      return {
        ...state,
        myData: state.myData.filter((item) => item !== action.payload),
      };
    case "EDIT_ITEMS":
      console.log(action.payload, "DELETED");
      return {
        ...state,
        myData: state.myData.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              website: action.payload.website,
              phone: action.payload.phone,
              myName: action.payload.myName,
              email: action.payload.email,
            };
          } else {
            return item;
          }
        }),
      };
    case "ADD_ITEMS":
      console.log(action.payload, "ADDITEMS");
      return {
        ...state,
        myData: state.myData.concat(action.payload),
      };
    default:
      return state;
  }
};
let initialstate2 = { myState: false };
export const stateReducer = (state = initialstate2, action) => {
  switch (action.type) {
    case "DISPLAY_MODAL_BUTTON":
      return { ...state, myState: action.payload };
    default:
      return state;
  }
};
let initialstate3 = { addItemsState: false };
export const StateAddItemsReducer = (state = initialstate3, action) => {
  switch (action.type) {
    case "DISPLAY_Add_BUTTON":
      return { ...state, addItemsState: action.payload };
    default:
      return state;
  }
};
