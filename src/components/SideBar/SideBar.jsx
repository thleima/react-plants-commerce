import data from "../../data/plants.json";
import Link from "../Link.jsx";
import usePlantActions from "../../hooks/usePlantActions.js";

export default function SideBar() {
	const { plants, handleSortByCategory } = usePlantActions();

	return (
		<div className="sidebar">
			<Link
				selected={plants.category}
				handleClick={() => handleSortByCategory("All", data)}>
				All
			</Link>
			{data.map((category) => {
				return (
					<Link
						selected={plants.category}
						key={category.category}
						handleClick={() =>
							handleSortByCategory(category.category, category.plants)
						}>
						{category.category}
					</Link>
				);
			})}
		</div>
	);
}
