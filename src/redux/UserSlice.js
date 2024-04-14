import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
	name: "user",
	initialState: {
        token: "",
        display_name: "",
        username: ""
    },
	reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.display_name = action.payload.display_name;
            state.username = action.payload.username;
        }
	},
});
export const {setToken, setUser} = UserSlice.actions;

export default UserSlice.reducer;
