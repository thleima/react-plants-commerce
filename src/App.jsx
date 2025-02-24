import BackgroundHeading from "./components/BackgroundHeading";
import Logo from "./components/Header/Logo";
import Cart from "./components/Header/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import SideBar from "./components/SideBar/SideBar";
import Basket from "./components/Checkout/Basket";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";

export default function App() {
	const [checkout, setCheckout] = useState(false);
	return (
		<>
			<BackgroundHeading />
			<main>
				<Header>
					<Logo />
					<Cart
						handleClick={() => setCheckout(!checkout)}
						text={checkout ? "HomePage" : "Checkout"}
					/>
				</Header>
				<section className="content">
					{checkout ? (
						<>
							<Basket />
							<Checkout handleClick={() => setCheckout(!checkout)} />
						</>
					) : (
						<>
							<ItemList />
							<SideBar />
						</>
					)}
				</section>
			</main>

			<Footer />
		</>
	);
}
