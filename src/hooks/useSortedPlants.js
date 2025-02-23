import { useMemo } from "react";

const useSortedPlants = (plants, sortBy) => {
	return useMemo(() => {
		return [...plants].sort((a, b) => {
			switch (sortBy) {
				case "default":
					return 0;
				case "expensive":
					return Number(b.cost.slice(1)) > Number(a.cost.slice(1)) ? 1 : -1;
				case "cheaper":
					return Number(b.cost.slice(1)) > Number(a.cost.slice(1)) ? -1 : 1;
				case "alphabetical":
					return a.name.localeCompare(b.name);
				default:
					return 0;
			}
		});
	}, [sortBy, plants]);
};

export default useSortedPlants;
