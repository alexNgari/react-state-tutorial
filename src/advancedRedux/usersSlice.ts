import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "../types";
import { fetchUsersThunk } from "./fetchUsersThunk";

// Define a type for the slice state
interface UsersState {
  usersList: User[];
}

// Define the initial state using that type
const initialState: UsersState = {
  usersList: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clickedUser: (state, action: PayloadAction<number>) => {
      const userId = action.payload;
      state.usersList = state.usersList.map((user) => {
        if (user.id === userId) {
          const previousCount = user.count;
          return {
            ...user,
            count: previousCount === undefined ? 1 : previousCount + 1,
          };
        }
        return user;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.usersList = action.payload;
    });
  },
});

export const { clickedUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const usersSelector = (state: RootState) => state.users.usersList;

let idsSelectorCache: number[] = [];
export const idsSelector = (state: RootState) => {
  const newIds = state.users.usersList.map((user) => user.id);
  if (!compareIdsArrayContents(idsSelectorCache, newIds)) {
    idsSelectorCache = newIds;
  }
  return idsSelectorCache;
};

export const userSelector = (state: RootState, id: number) => {
  return state.users.usersList.find((user) => user.id === id);
};

const compareIdsArrayContents = (ids1: number[], ids2: number[]) => {
  if (ids1.length !== ids2.length) {
    return false;
  }
  ids1.forEach((id, index) => {
    if (id !== ids2[index]) {
      return false;
    }
  });
  return true;
};

export default usersSlice.reducer;
