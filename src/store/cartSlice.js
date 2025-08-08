import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.card.info.id === newItem.card.info.id
            );
            if(existingItem){
                alert("Item already in cart if you want to increase quantity, please do so in cart");
            }else{
                state.items.push(newItem);
            }
        },
        removeItem(state,action){
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
        },
        clearCart(state){
            state.items.length = 0;
        },

    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;