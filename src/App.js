import React, {useContext, useState} from 'react';

const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [secondState, setSecondState] = useState('Print 2nd state');
  return (
    <ThemeContext.Provider
      value={{
        darkTheme: [darkTheme, setDarkTheme],
        secondState: [secondState, setSecondState],
      }}>
      <button>Click here</button>
      <FuncChild />
      <ClassChild />
    </ThemeContext.Provider>
  );
}

function FuncChild() {
  const {darkTheme, secondState} = useContext(ThemeContext);
  const [themeValue, setThemeValue] = darkTheme;
  const [secondValue, setSecondValue] = secondState;
  function themeStyles(darkTheme) {
    return {
      display: 'flex',
      alignIems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: darkTheme ? 'black' : 'grey',
      margin: '10px',
      color: 'white',
    };
  }

  return (
    <div style={themeStyles(themeValue)}>
      <p>Function</p>
      <p>this is {secondValue}</p>
      {console.log(typeof secondValue)}
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
