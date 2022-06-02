import React, { createContext, useState } from 'react'

export const Autherizedcontext =createContext()
 export const AuthProvider=({children})=> {
     const [isAutherized,setIsAutherized]=useState(false);

     const login=(username,password)=>{
         if(username && password){
             setIsAutherized(true);
         }
     }
     const logout=()=>{
         setIsAutherized(false);
     }
  return (
    <Autherizedcontext.Provider value={{isAutherized,login,logout}}>{children}</Autherizedcontext.Provider>
  )
}
