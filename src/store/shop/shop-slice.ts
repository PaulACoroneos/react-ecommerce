import { createSlice } from '@reduxjs/toolkit';

export interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}

export interface CollectionData {
    id: number;
    title: string;
    routeName: string;
    items: Item[];
}

interface InitialState {
    shopData: { [key: string]: CollectionData };
}

const initialState: InitialState = {
    shopData: {},
};
const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        updateShopDataFromFirebase(state, action) {
            state.shopData = action.payload;
        },
    },
});

export const { updateShopDataFromFirebase } = shopSlice.actions;

export default shopSlice.reducer;
