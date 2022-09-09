import React from "react";

const theme = {
    light: {
        background: '#eeeeee',
        color: 'red'
    },
    dark: {
        background: '#222222',
        color: 'yellow'
    }
}

const ThemeContext = React.createContext(theme.light);

function Content1() {
    return (
        <ThemeContext.Provider value={theme.dark}>
            <Content2></Content2>
        </ThemeContext.Provider>
    )
}

function Content2() {
    return (
        <div>
            <Content3></Content3>
        </div>
    )
}

function Content3() {
    const theme = React.useContext(ThemeContext);
    return (
        <div>
            {`${theme.background}${theme.color}`}
        </div>
    )
}

export default Content1;