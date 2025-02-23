import { useDispatch, useSelector } from "react-redux";
import { sortByCategory } from "../stores/plantsSlice.js";

const usePlantActions = () => {
	const dispatch = useDispatch();
	const plants = useSelector((state) => state.plants.items);

	const handleSortByCategory = (category, plants) => {
		dispatch(sortByCategory({ category, plants }));
	};

	return {
		plants,
		handleSortByCategory,
	};
};

export default usePlantActions;
