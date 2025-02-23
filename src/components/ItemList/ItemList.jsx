import { useState, useEffect } from "react";
import { sortingOptions } from "../../lib/constants.js";
import data from "../../data/plants.json";
import Select from "react-select";
import PlantCard from "./PlantCard.jsx";
import Loading from "../Loading.jsx";
import usePlantActions from "../../hooks/usePlantActions.js";
import useSortedPlants from "../../hooks/useSortedPlants.js";

export default function ItemList() {
	const { plants, handleSortByCategory } = usePlantActions();
	const [sortBy, setSortBy] = useState("default");

	useEffect(() => {
		if (plants.plants.length === 0) {
			handleSortByCategory("All", data);
		}
	}, [plants.plants, handleSortByCategory]);

	let sortedPlants = useSortedPlants(plants.plants, sortBy);

	return (
		<ul className="item-list">
			{plants.plants.length === 0 && <Loading />}
			<section className="sorting">
				<Select
					onChange={(selectedOption) => setSortBy(selectedOption.value)}
					defaultValue={sortingOptions[0]}
					options={sortingOptions}
					isSearchable={false}
				/>
			</section>
			{sortedPlants.map((plant, index) => {
				return <PlantCard key={index} plant={plant} />;
			})}
		</ul>
	);
}
