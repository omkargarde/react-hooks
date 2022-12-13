import React from 'react'
import './App.css'
import DataFetching from './components/dataFetching/DataFetching'
import HookContainer from './components/hookExamples/HookContainer'

export const UserContext = React.createContext()
export const UsersContext = React.createContext()
export default function App() {
  return (
    <div>
      {/* <HookContainer></HookContainer> */}
      <UserContext.Provider value={'user'}>
        <UsersContext.Provider value={'user2'}>
          <DataFetching></DataFetching>
        </UsersContext.Provider>
      </UserContext.Provider>
    </div>
  )
}


/*

function App() {
  return (
    <div>
    </div>
  )
}

export default App

*/
