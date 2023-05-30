import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();


const profile=[{
  profileImg:'https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0',
  username: "Zahra Saktiwala",
  active:false,
  tweets:[
    { 
      createdAt: 'Mon Mar 21 2023 11:02:56 GMT+0530 (India Standard Time)',
      text: 'Good Morning Folks!!!',
      image: 'https://tse1.mm.bing.net/th?id=OIP.qHERJE6gnvH1SEkJkfzojgHaEK&pid=Api&P=0',
    },
    { 
      createdAt: 'Sun Mar 19 2023 11:02:56 GMT+0530 (India Standard Time)',
      text: 'Hello People!!',
      image: 'https://tse3.mm.bing.net/th?id=OIP.G_ZAazqbb09Qf6327NfZWwHaEK&pid=Api&P=0',
    },   
  ]
 
}]

export const AuthContextProvider = ({ children }) => {
  
  const [user,setUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user)
      if(!profile.some(e => e.username === result.user.displayName)){
        const userDetail={
          profileImg: result.user.photoURL,
          username: result.user.displayName,
          tweets:[],
          active:true,
        }
        profile.push(userDetail)
        window.localStorage.setItem('profile',JSON.stringify(userDetail))
      //  console.log(localStorage.getItem("profile"))
      
      }
      else{
        let objIndex = profile.findIndex((obj => obj.username === result.user.displayName));
        //console.log(objIndex)
        profile[objIndex].active=true;
        window.localStorage.setItem('profile',JSON.stringify(profile[objIndex]))
      }
    }).catch((error) => {
      console.log(error);
    });
  
  };

  const logOut = () =>{
   
    if(user){
      profile.some(obj => 
        obj.username === user.displayName?obj.active=false:''
        );
    }
    signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={{ googleSignIn,logOut,user,profile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
