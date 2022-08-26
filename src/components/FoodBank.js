const style = {
	border: "1px solid black",
	margin: "5px",
};

const FoodBank = ({ data }) => {
	return (
		<div style={style}>
			<p>{data.foodbank.name}</p>
			<p>{data.address}</p>
			<p>{data.postcode}</p>
			<p>{data.foodbank.urls.html}</p>
		</div>
	);
};

export default FoodBank;
