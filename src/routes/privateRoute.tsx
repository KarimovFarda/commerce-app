import React from 'react'
import { Navigate} from 'react-router'

export const PrivateRoute = ({ children}:any) => {
  const isAuthenticated = localStorage.getItem("token");;
  if (isAuthenticated) {
    return children
  }else{
    return  <Navigate to="/login" />
  }  
}

export default PrivateRoute