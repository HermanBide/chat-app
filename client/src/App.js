import React from 'react';
import './App.css';
import Panel from './Components/panel';
import Group from './Components/group';

function App() {

    return (
      <div className="App">
        <div className="group-chat">
          <Group />
        </div>
        <div className='panel-chat'>
        <Panel />
        </div>
      </div>
    );
}

export default App;
