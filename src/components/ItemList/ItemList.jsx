import Select from "react-select";
import { sortingOptions } from "../../lib/constants.js";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByCategory } from "../../stores/plantsSlice.js";
import data from "../../data/plants.json";
import PlantCard from "./PlantCard.jsx";
import Loading from "../Loading.jsx";

export default function ItemList() {
	const dispatch = useDispatch();
	const plants = useSelector((state) => state.plants.items);
	const [sortBy, setSortBy] = useState("default");

	useEffect(() => {
		if (plants.plants.length === 0) {
			dispatch(
				sortByCategory({
					category: "All",
					plants: data,
				})
			);
		}
	}, [dispatch, plants]);

	let sortedPlants = useMemo(() => {
		return [...plants.plants].sort((a, b) => {
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
