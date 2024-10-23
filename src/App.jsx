import { useEffect, useState } from "react"
import Header from "./layouts/Header";
import Cursor from "./components/Cursor";
import About from "./layouts/About";


function App() {

  // set the theme to system preference
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  // add event listeners for system preferences changes - so the theme changes if the user changes system preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [])

  // modify the dom when the theme changes 
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  // function to enable dark or light mode using a button
  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden overflow-y-scroll relative">
      <Cursor />
      <Header parentTheme= {theme} handleThemeSwitch={handleThemeSwitch}/>
      <About parentTheme= {theme}/>
    </div>
  )
}

export default App
