export default function Link({ selected, children, handleClick }) {
	return (
		<div
			className={`link ${selected === children ? "link--active" : ""}`}
			onClick={handleClick}>
			{children}
		</div>
	);
}
