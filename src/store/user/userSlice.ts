import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayName: null,
    email: null,
    id: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        clearCurrentUser() {
            return initialState;
        },
    },
});

export const { clearCurrentUser, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
