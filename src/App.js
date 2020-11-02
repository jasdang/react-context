import React, {useContext, useState} from 'react';

function App() {
  return (
    <div className='App'>
      <button>Click here</button>
      <FuncChildren />
    </div>
  );
}

function FuncChildren() {
  function themeStyles(darkTheme) {
    return {
      backgroundColor: darkTheme ? 'black' : 'grey',
      height: '100px',
      width: '100px',
    };
  }

  return <div style={themeStyles(true)}></div>;
}

export default App;
