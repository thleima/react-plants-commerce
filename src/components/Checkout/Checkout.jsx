import useCartActions from "../../hooks/useCartActions";
import PlantSmallCard from "./PlantSmallCard";
import {
	calculateTotalCost,
	calculateTotalAmount,
} from "../../utils/calculate.js";

export default function Checkout() {
	const { cart, handleUpdateQuantity, handleRemoveItem } = useCartActions();

	return (
		<>
			<div>
				<p>Total amount : ${calculateTotalAmount(cart)}</p>
			</div>

			<ul className="item-list">
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
