import FoodBank from "./FoodBank";

const ListFoodBank = ({ data }) => {
	return (
		<div>
			{data.map((v, key) => (
				<FoodBank data={v} />
			))}
		</div>
	);
};

export default ListFoodBank;
