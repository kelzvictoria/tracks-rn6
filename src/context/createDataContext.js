import React, { useEffect, useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext();
    const Provider = ({ children }) => {
        const [ state, dispatch ] = useReducer(reducer, initialState);

        const boundActions = {};

        for(let key in actions){
            boundActions[key] = actions[key](dispatch)
        }
        
        if(boundActions["tryLocalSignin"]){
            useEffect(() => {
            boundActions["tryLocalSignin"]();
        }, [])
        }
        

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}