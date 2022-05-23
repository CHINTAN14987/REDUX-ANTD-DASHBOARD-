export const listItems = () => {
  return {
    type: "LIST_ITEMS",
  };
};

export const deleteItems = (item) => {
  return {
    type: "DELETE_ITEMS",
    payload: item,
  };
};

export const editItems = (item) => {
  return {
    type: "EDIT_ITEMS",
    completed: true,
    payload: item,
  };
};

export const addItems = (items) => {
  return {
    type: "ADD_ITEMS",
    id: new Date().getTime(),
    payload: items,
  };
};

export const stateSet = (item) => {
  return {
    type: "DISPLAY_MODAL_BUTTON",
    payload: item,
  };
};

export const additemStateAction = (item) => {
  return {
    type: "DISPLAY_Add_BUTTON",
    payload: item,
  };
};
