import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gil Brother'
const [usuarios,setUsuarios] = useState([
    {
        id: Date.now(),
        nome: "Astrogildo",
        email: "astrogildo@gmail.com"
    },
    {
        id: Date.now()+1,
        nome: "Bastardo",
        email: "bastardo@gmail.com"
    },
    {
        id: Date.now()+2,
        nome: "Catapora",
        email: "catapora@gmail.com"
    }
])

    return(
        <GlobalContext.Provider value={{usuarioLogado , usuarios , setUsuarios}}>
            {children}
        </GlobalContext.Provider>
    )
}