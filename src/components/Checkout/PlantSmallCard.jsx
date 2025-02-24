import Button from "../Button";

export default function PlantSmallCard({
	plant,
	handleUpdateQuantity,
	handleRemoveItem,
	totalCost,
}) {
	return (
		<li className="plant_container">
			<img src={plant.image} alt={plant.name} />
			<div className="basket--item_info">
				<h4>{plant.name}</h4>
				<p>
					<b>{plant.cost}</b>
				</p>
			</div>
			<p>
				Total: <b>${totalCost}</b>
			</p>
			<div className="basket--btn_container">
				<Button
					type="tertiary"
					handleClick={() => {
						plant.quantity === 1
							? handleRemoveItem(plant)
							: handleUpdateQuantity(plant, plant.quantity - 1);
					}}>
					-
				</Button>
				<p>
					Quantity: <b>{plant.quantity}</b>
				</p>
				<Button
					type="tertiary"
					handleClick={() => handleUpdateQuantity(plant, plant.quantity + 1)}>
					+
				</Button>
			</div>
		</li>
	);
}
