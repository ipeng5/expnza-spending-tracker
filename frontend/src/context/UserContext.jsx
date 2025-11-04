import React, { createContext, useState } from "react";

// Provide a safe default shape so consumers won't crash if used
// outside of a provider (useful for tests or accidental usages).
export const UserContext = createContext({
  user: null,
  updateUser: () => {},
  clearUser: () => {},
});

function UserProvider({ children }) {
  // Start with null explicitly for predictable checks
  const [user, setUser] = useState(null);

  function updateUser(userData) {
    setUser(userData);
  }

  function clearUser() {
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
