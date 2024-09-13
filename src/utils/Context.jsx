import { createContext, useContext, useEffect, useReducer, useMemo } from "react";


export const initialState = {
  theme: false,
  dentists: [],
  dentist: {},
  favs: JSON.parse(localStorage.getItem("favDentist")) || [],
};


export const ContextGlobal = createContext(undefined);


const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };

    case "GET_DENTIST":
      return { ...state, dentist: action.payload };

    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };

    case "REMOVE_FAV": {
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    }

    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme };

    default:
      throw new Error("Error en reducer");
  }
};


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favDentist", JSON.stringify(state.favs));
  }, [state.favs]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({ type: "GET_DENTISTS", payload: data });
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      getDentists();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistContext = () => useContext(ContextGlobal);

export default ContextProvider;