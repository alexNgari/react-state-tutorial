import { useCallback, useEffect, useState } from "react";
import type { User } from "./types";
import "./styles.css";
import { FillerComponent } from "./components/FillerComponent";

export default function App() {
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
    <div className="container flexcontainer px-4">
      <h1 className="font-bold text-left">Users List</h1>
      <FillerComponent users={users} onClickUser={increaseCount} />
    </div>
  );
}
