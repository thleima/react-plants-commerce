import data from "../../data/plants.json";
import Link from "../Link.jsx";
import { useDispatch, useSelector } from "react-redux";
import { sortByCategory } from "../../stores/plantsSlice.js";

export default function SideBar() {
	const dispatch = useDispatch();
	const plants = useSelector((state) => state.plants.items);

	return (
		<div className="sidebar">
			<Link
				selected={plants.category}
				handleClick={() => {
					dispatch(
						sortByCategory({
							category: "All",
							plants: data,
						})
					);
				}}>
				All
			</Link>
			{data.map((category) => {
				return (
					<Link
						selected={plants.category}
						key={category.category}
						handleClick={() => {
							dispatch(
								sortByCategory({
									category: category.category,
									plants: category.plants,
								})
							);
						}}>
						{category.category}
					</Link>
				);
			})}
		</div>
	);
}
