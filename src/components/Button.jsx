export default function Button({ type, children, handleClick }) {
	let btnType;
	switch (type) {
		case "primary":
			btnType = "btn";
			break;
		case "secondary":
			btnType = "btn btn--secondary";
			break;
		case "tertiary":
			btnType = "btn--tertiary";
			break;
		default:
			btnType = "";
			break;
	}
	return (
		<button onClick={handleClick} className={btnType}>
			{children}
		</button>
	);
}
