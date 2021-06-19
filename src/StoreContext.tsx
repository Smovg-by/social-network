import React from 'react'

import { StoreType } from './redux/store'

export const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
  value: StoreType
  children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  )
}
