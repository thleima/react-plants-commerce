import Button from "../Button";
import useCartActions from "../../hooks/useCartActions";

export default function PlantCard({ plant }) {
	const { cart, handleAddItem, handleRemoveItem } = useCartActions();

	let isInCart = cart.find((i) => i.name === plant.name);

	return (
		<li className="plant_container">
			<img src={plant.image} alt={plant.name} />
			<div className="item_info">
				<h3>{plant.name}</h3>
				<p>{plant.description}</p>
				<p>
					<b>{plant.cost}</b>
				</p>
			</div>
			<div className="plant_container--btn_container">
				{isInCart ? (
					<Button type="secondary" handleClick={() => handleRemoveItem(plant)}>
						Remove {isInCart.quantity >= 1 && `(${isInCart.quantity})`}
					</Button>
				) : (
					<Button type="primary" handleClick={() => handleAddItem(plant)}>
						Add
					</Button>
				)}
			</div>
		</li>
	);
}
