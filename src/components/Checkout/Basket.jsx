import useCartActions from "../../hooks/useCartActions";
import PlantSmallCard from "./PlantSmallCard";
import EmptyView from "../EmptyView";
import { calculateTotalCost } from "../../utils/calculate.js";

export default function Basket() {
	const { cart, handleUpdateQuantity, handleRemoveItem } = useCartActions();

	return (
		<>
			<ul className="item-list">
				{cart.length === 0 && <EmptyView />}
				{cart.map((item, index) => {
					return (
						<PlantSmallCard
							key={index}
							plant={item}
							handleUpdateQuantity={handleUpdateQuantity}
							handleRemoveItem={handleRemoveItem}
							totalCost={calculateTotalCost(item, cart)}
						/>
					);
				})}
			</ul>
		</>
	);
}
