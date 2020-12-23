import React, { createContext, useReducer }from 'react'

const initialState = { 
    count : 200,
}


let reducer = (state, action ) => {
    switch ( action.type ) {
        case "increment":

            return {
                ...state,
                count: state.count + 1,
            }
        case "decrement":
            return{
                ...state, 
                count: state.count - 1 
            }
        case "reset":
            return{
                ...state,
                count: 200
            }
        default:
            return
    }
}



const counterCountext = createContext(initialState)
//  console.log (counterCountext.count,"ini counterContext")
function CounterProvider ( props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(state, "inistate")
    return(
        <counterCountext.Provider value={{ state, dispatch }}>
            {props.children}
        </counterCountext.Provider>
    );
}

export { counterCountext, CounterProvider }
