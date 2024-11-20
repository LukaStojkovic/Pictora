import React, { createContext, useContext, useState } from "react";

const GetUserContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState(null);

  // TO - DO napravi novi route /my-profile i posalji data o useru
  // async function fetchUser() {
  //   const data = await axios.get("/");
  //   setUser(data.user);
  // }

  return (
    <GetUserContext.Provider value={{ user, setUser }}>
      {children}
    </GetUserContext.Provider>
  );
}

function useUser() {
  const context = useContext(GetUserContext);
  if (!context) {
    console.error("useUser must be used within a UserContext provider.");
  }
  return context;
}

export { UserContext, useUser };
