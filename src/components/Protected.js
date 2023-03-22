import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

function Protected({children}) {
   
    const {user,logOut} =UserAuth();
    useEffect(()=>logOut(),[])
    if(!user){
        return (console.log("not user"))
    }
    
  return children;
}

export default Protected