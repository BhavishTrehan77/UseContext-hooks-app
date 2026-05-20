import { useContext } from "react"
import {UserContext} from "../context/Usercontext"


const Profile=()=>{
    const{user,setUser}=useContext(UserContext)

    return(
        <>
        <div className="card">

      <h2>Profile Page</h2>

      <p>User: {user}</p>

      <button onClick={() => setUser("Rahul")}>
        Change User
      </button>

    </div>
        </>
    )
}
export default Profile