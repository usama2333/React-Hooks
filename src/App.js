import { createContext, useState } from "react";
import UseEffectDemo from "./components/UseEffectDemo";
import UseStateDemo from "./components/UseStateDemo";
import FunctionContextComponent from "./components/FunctionContextComponent";
import UseRefDemo from "./components/UseRefDemo";
import UseMemo from "./components/UseMemo";
import UseCallbackDemo from "./components/UseCallbackDemo";

// this how to create contentex
export const ThemeContext = createContext()

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true);


  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
   
  return (
      <>
      {/* <UseStateDemo/> */}
      {/* <UseEffectDemo/> */}

{/* here provide the theme with some value that is avaliable in all child 
that are call inside the provider */}

      {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent/>
      </ThemeContext.Provider> */}

      {/* <UseRefDemo/> */}
      {/* <UseMemo/> */}
      <UseCallbackDemo/>
        
      </>
  )
}
