import React, { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const loading = true;

  console.log("auth provider called");

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthValue = () => useContext(AuthContext);
