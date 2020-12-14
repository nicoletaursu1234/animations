import React, { createContext, useReducer, useMemo } from 'react'
import { AnimationReducer } from '../reducers';

export const AnimationContext = createContext({ bgVisible: true })

const AnimationContextProvider = (props) => {
  const [{ bgVisible }, dispatch] = useReducer(AnimationReducer, { bgVisible: true });
  
  const contextValue = useMemo(() => {
    return { bgVisible, dispatch }
  }, [bgVisible, dispatch])

  return (
    <AnimationContext.Provider value={contextValue}>
      {props.children}
    </AnimationContext.Provider>
  )
}

export default AnimationContextProvider