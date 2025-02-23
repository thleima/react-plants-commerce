import { createSlice } from "@reduxjs/toolkit";

export const PlantSlice = createSlice({
	name: "plants",
	initialState: {
		items: {
			category: "All",
			plants: [],
		},
	},
	reducers: {
		sortByCategory: (state, action) => {
			const { category, plants } = action.payload;
			if (category === "All") {
				let allPlants = plants.map((el) => el["plants"]);
				let allPlantsMerged = allPlants.reduce(
					(initial, current) => initial.concat(current),
					[]
				);
				state.items = { category, plants: allPlantsMerged };
			} else {
				state.items = { category, plants };
			}
		},
	},
});

export const { sortByCategory } = PlantSlice.actions;

export default PlantSlice.reducer;
