import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import cartReducer from "./cartSlice";
import plantReducer from "./plantsSlice";

const persistConfig = { key: "root", storage };

const reducers = combineReducers({
	cart: cartReducer,
	plants: plantReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
