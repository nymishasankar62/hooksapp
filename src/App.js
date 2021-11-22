import logo from './logo.svg';
import './App.css';
import ComponentA from './components/Contexthook/ComponentA';
import React from 'react';


export const UserContext = React.createContext()    
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Nymisha Sankar'} >
        <BatchContext.Provider value={'Dxc Batch 2'}>
          <ComponentA />
        </BatchContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;