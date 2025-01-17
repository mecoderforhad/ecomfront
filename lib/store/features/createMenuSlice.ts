import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
    menus: string[];
}

const initialState: CartState = {
    menus: [],
};

export const createMenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenu: (state, action) => {
            state.menus.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addMenu } = createMenuSlice.actions;

export default createMenuSlice.reducer;