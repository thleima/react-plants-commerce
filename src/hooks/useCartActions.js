import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	removeItem,
	updateItemQuantity,
} from "../stores/cartSlice.js";

const useCartActions = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.items);

	const handleAddItem = (plant) => {
		dispatch(addItem(plant));
	};

	const handleRemoveItem = (plant) => {
		dispatch(removeItem(plant));
	};

	const handleUpdateQuantity = (plant, quantity) => {
		dispatch(updateItemQuantity({ item: plant, quantity }));
	};

	return {
		cart,
		handleAddItem,
		handleRemoveItem,
		handleUpdateQuantity,
	};
};

export default useCartActions;
