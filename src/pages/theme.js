import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { Button } from "../components/ButtonElements";
import { GlobalStyles } from "../components/Themes/globalstyles";
import { lightTheme, darkTheme } from "../components/Themes/Themes"

const Theme = () => {
  const [hover,setHover] = useState(false)

  const onHover = () => {
        setHover(!hover)
  }
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 10);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
        <div className="App">
          <Button onClick={themeToggler} onMouseEnter = {onHover} onMouseLeave = {onHover} dark="true">Theme</Button>
        </div>
      </>
    </ThemeProvider>
    
  );
};
export default Theme;