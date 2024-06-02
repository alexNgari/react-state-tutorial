import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types";

export const fetchUsersThunk = createAsyncThunk<User[]>(
  "users/fetch",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonPayload: User[] = await res.json();
    const users = jsonPayload.map((user) => ({ ...user, count: 0 }));
    return users;
  },
);
