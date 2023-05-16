/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

//  import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
export const UserContext=createContext();

  //  const auth = getAuth();
const UserContextProvider = ({children}) => {
 

  
        const [userLoggedIn, setuserLoggedIn] = useState(false)
        const [userLogged, setUserLogged] = useState()
      useEffect(() => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                setuserLoggedIn(true)
                setUserLogged(user)
                 //User is signed in, see docs for a list of available properties
                // https:firebase.google.com/docs/reference/js/firebase.User
             
                

              } else {
                setuserLoggedIn(false)
              }
            });
      }, [])
    


return(
<UserContext.Provider  value={{userLoggedIn, setuserLoggedIn,userLogged, setUserLogged}} >
{children}
</UserContext.Provider>
)
  
  
}

export default UserContextProvider