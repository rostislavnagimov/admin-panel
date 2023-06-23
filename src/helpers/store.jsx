import React from "react";
import { useState } from "react";
import Context from "./context";

const Store = ({ children }) => {
    const [state, setState] = useState({
      title: undefined,
      mode: undefined,
      game: undefined,
      value: undefined
    })

    return (
        <Context.Provider value={{state, setState}}>
          {children}
        </Context.Provider>
      );

}

export default Store