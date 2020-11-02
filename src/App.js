import React, {useContext, useState} from 'react';

const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button>Click here</button>
      <FuncChild />
      <ClassChild />
    </ThemeContext.Provider>
  );
}

function FuncChild() {
  function themeStyles(darkTheme) {
    return {
      display: 'flex',
      alignIems: 'center',
      justifyContent: 'center',
      backgroundColor: darkTheme ? 'black' : 'grey',
      margin: '10px',
      color: 'white',
    };
  }

  return (
    <div style={themeStyles(true)}>
      <p>Function</p>
    </div>
  );
}

class ClassChild extends React.Component {
  themeStyles(darkTheme) {
    return {
      display: 'flex',
      alignIems: 'center',
      justifyContent: 'center',
      backgroundColor: darkTheme ? 'black' : 'grey',
      color: 'white',
      margin: '10px',
      textAlign: 'center',
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <div style={this.themeStyles(darkTheme)}>
              <p>Class</p>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
