import { createContext, useCallback, useMemo, useState } from "react";

interface UserContextProps {
  user: {
    _id: string;
    email: string;
    name: string;
    currentNorwegianSkill: string;
    profilePicture: string;
  } | null;
  storeUser: (userData: {
    _id: string;
    email: string;
    name: string;
    currentNorwegianSkill: string;
    profilePicture: string;
  }) => void;
  removeUser: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  storeUser: () => {},
  removeUser: () => {},
});

const getInitialUser = (): {
  _id: string;
  email: string;
  name: string;
  currentNorwegianSkill: string;
  profilePicture: string;
} | null => {
  try {
    const rawUser = localStorage.getItem("user");
    return rawUser ? JSON.parse(rawUser) : null;
  } catch (error) {
    // There was an error parsing the user from local storage
    console.warn("User not found from localStorage");
    return null;
  }
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialUser = useMemo(() => getInitialUser(), []);
  const [user, setUser] = useState<{
    _id: string;
    email: string;
    name: string;
    currentNorwegianSkill: string;
    profilePicture: string;
  } | null>(initialUser);

  const storeUser = useCallback(
    (userData: {
      _id: string;
      email: string;
      name: string;
      currentNorwegianSkill: string;
      profilePicture: string;
    }) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    },
    [setUser],
  );

  const removeUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
  }, [setUser]);

  const contextValue = useMemo(
    () => ({
      user,
      storeUser,
      removeUser,
    }),
    [user, storeUser, removeUser],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
