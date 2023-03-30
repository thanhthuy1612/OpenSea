import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: {},
};

export const account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccount: (state, action) => {
            state.info = action.payload;
        },
    },
});
const accountReducer = account.reducer;

export const { setAccount } = account.actions;
export default accountReducer;
