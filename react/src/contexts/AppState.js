import { createContext, useReducer } from 'react';
import UserDataService from "../services/user.service";

const appReducer = (state, action) => {
  switch (action.type) {
    case 'RETRIEVE_USERS': {
      return action.payload;
    }
    case 'ADD_USER': {
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  users: [
    {
      firstName: "User One",
      lastName: "Y",
      age: 15,
      weight: 45,
      height: 1.52,
      gender: "Female"
    },
    {
      firstName: "User",
      lastName: "Two X",
      age: 25,
      weight: 75,
      height: 1.24,
      gender: "Male"
    }
  ],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addUser = async (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  };

  const retrieveUsers = () => async (dispatch) => {
      const res = await UserDataService.getAll();
      dispatch({
        type: 'RETRIEVE_USERS',
        payload: res.data,
      });
  };

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        addUser,
        retrieveUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};