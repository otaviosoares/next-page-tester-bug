import React, { useContext } from "react"

const Context = React.createContext()

export const useTestHook = () => {
  const test = useContext(Context)
  if (test === undefined) throw new Error(`useTestHook must be used within a TestHookProvider`)
  return test
}

const someFn = () => {
  console.log('test')
}

export const TestHookProvider = ({children}) => {
  return <Context.Provider value={{someFn}}>{children}</Context.Provider>
}