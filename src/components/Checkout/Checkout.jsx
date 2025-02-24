import {
	calculateTotalAmount,
	calculateTotalQuantity,
} from "../../utils/calculate.js";
import useCartActions from "../../hooks/useCartActions";
import Button from "../Button";

export default function Checkout({ handleClick }) {
	const { cart } = useCartActions();

	return (
		<section className="checkout">
			<p>
				Total amount : <b>${calculateTotalAmount(cart)}</b>
			</p>
			<p>
				Num of articles : <b>{calculateTotalQuantity(cart)}</b>
			</p>
			<div className="checkout--btn_container">
				<Button type="primary" handleClick={handleClick}>
					Continue Shopping
				</Button>
				<Button
					type="secondary"
					handleClick={() => alert("Thank you for your order!")}>
					Order
				</Button>
			</div>
		</section>
	);
}
