import React, { createContext, useReducer, useMemo } from 'react'
import { AnimationReducer } from '../reducers';

export const AnimationContext = createContext({ bgVisible: true })

const AnimationContextProvider = (props) => {
  const [{ bgVisible, redirect }, dispatch] = useReducer(AnimationReducer, { bgVisible: true, redirect: false });
  
  const contextValue = useMemo(() => {
    return { bgVisible, redirect, dispatch }
  }, [bgVisible, redirect, dispatch])

  return (
    <AnimationContext.Provider value={contextValue}>
      {props.children}
    </AnimationContext.Provider>
  )
}

export default AnimationContextProvider