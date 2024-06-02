import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useCallback,
  useEffect,
} from "react";
import type { User } from "../types";

interface UsersContextType {
  users: User[];
  onClickUser: (id: number) => void;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

const UsersContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const increaseCount = useCallback((userId: number) => {
    setUsers((previousUsers) => {
      const newUsers = previousUsers.map((user) => {
        if (user.id === userId) {
          const previousCount = user.count;
          return {
            ...user,
            count: previousCount === undefined ? 0 : previousCount + 1,
          };
        }
        return user;
      });
      return newUsers;
    });
  }, []);

  useEffect(() => {
    let isUnmounted = false;
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      try {
        const users = await res.json();
        if (!isUnmounted) {
          setUsers(users.map((user: User) => ({ ...user, count: 0 })));
        }
      } catch (err) {
        console.error(err);
      }
    }

    void fetchUsers();

    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <UsersContext.Provider value={{ users, onClickUser: increaseCount }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error(
      "useUsersContext must be used within a UsersContextProvider instance",
    );
  }
  return context;
};

export { UsersContextProvider, useUsersContext };
