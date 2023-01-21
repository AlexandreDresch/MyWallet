import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  if (userData.token !== undefined) {
    localStorage.setItem("userData", JSON.stringify(userData));
  } else if (localStorage.getItem("userData") !== null) {
    let user = JSON.parse(localStorage.getItem("userData"));
    setUserData(user);
  }

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}