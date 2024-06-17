import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types";

export const fetchUsersThunk = createAsyncThunk<User[]>(
  "users/fetch",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    return users.map((user) => ({ ...user, count: 0 }));
  },
);
