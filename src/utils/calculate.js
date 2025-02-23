export const calculateTotalCost = (item, cart) => {
	let total = 0;
	const plant = cart.find((i) => i.name === item.name);
	total = Number(plant.cost.slice(1)) * plant.quantity;
	return total;
};

export const calculateTotalAmount = (cart) => {
	let total = 0;
	cart.forEach((item) => {
		total += Number(item.cost.slice(1)) * item.quantity;
	});
	return total;
};
