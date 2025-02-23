import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			const item = action.payload;
			const existingItem = state.items.find((i) => i.name === item.name);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...item, quantity: 1 });
			}
		},
		removeItem: (state, action) => {
			const item = action.payload;
			state.items = state.items.filter((i) => i.name !== item.name);
		},
		updateItemQuantity: (state, action) => {
			const { item, quantity } = action.payload;
			if (item) {
				const existingItem = state.items.find((i) => i.name === item.name);
				if (existingItem) {
					existingItem.quantity = quantity;
				}
			}
		},
	},
});

export const { addItem, removeItem, updateItemQuantity } = CartSlice.actions;

export default CartSlice.reducer;
