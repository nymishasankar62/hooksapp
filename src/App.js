import logo from './logo.svg';
import './App.css';
import DataFetching from './components/Useeffecthook/DataFetching';
import ComponentA from './components/Contexthook/ComponentA';
import React from 'react';


export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {'Nymisha'} >
        <ComponentA/>
     </UserContext.Provider>
    </div>
  );
}

export default App;