import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext() //Creando mi contexto
export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false); //booleano para definir el modo oscuro de mi app

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // si dark mode es verdadero lo pasa a falso
       if(!darkMode){
        document.body.firstElementChild.classList.add('darkMode')
       } else{
        document.body.firstElementChild.classList.remove('darkMode')
       }

    }

    return (<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>

        {props.children}

    </DarkModeContext.Provider>


    )

}