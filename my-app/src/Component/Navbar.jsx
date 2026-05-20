import { useContext } from "react"
import { UserContext } from "../context/Usercontext"




const Navbar=()=>{
    const {user}=useContext(UserContext)
    return(
        <>
         <div className="navbar">
      <h2>useContext App</h2>
      <h3>Welcome, {user}</h3>
    </div>
        </>
    )
}
export default Navbar