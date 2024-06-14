import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "../types";
import { fetchUsersThunk } from "./fetchUsersThunk";

// Define a type for the slice state
interface UsersState {
  usersList: User[];
}

const usersAdapter = createEntityAdapter<User>();

const initState = usersAdapter.getInitialState();

export const usersSlice = createSlice({
  name: "users",
  initialState: initState,
  reducers: {
    clickedUser: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const user = state.entities[id];
      const count = user.count ?? 0;
      const changes = { count: count + 1 };
      usersAdapter.updateOne(state, { id, changes });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      usersAdapter.setMany(state, action.payload);
    });
  },
});

export const { clickedUser } = usersSlice.actions;

export const { selectById: userSelector, selectIds: userIdsSelector } =
  usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;
