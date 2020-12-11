import React, { createContext, useState } from 'react'

export const AnimationContext = createContext({ bgVisible: true })

const AnimationContextProvider = (props) => {

    const [bgVisible, dispatch] = useState(true);
    
    return (
        <AnimationContext.Provider value={{ bgVisible, dispatch }}>
          {props.children}
        </AnimationContext.Provider>
    )
}

export default AnimationContextProvider