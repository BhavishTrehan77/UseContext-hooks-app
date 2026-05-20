import { createContext, useState } from "react"

export const UserContext=createContext()
const Userprovider=({children})=>{
    const[user,setUser]=useState("Bhavish")
    return(
        <>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
        </>
    )

}
export default Userprovider

