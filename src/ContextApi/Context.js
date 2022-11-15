import { chipClasses } from "@mui/material"
import React, { createContext } from "react"
import { Provider } from "react"

 export let ContextProvider = createContext()      
 
export const Context = ({children}) =>{
           
      let obj = {name:"blank object "}

       return (
        <React.Fragment>
               <ContextProvider.Provider  value={obj}>
                {children}        
            </ContextProvider.Provider>    
        </React.Fragment> 
     )
}