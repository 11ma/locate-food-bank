import FoodBank from "./FoodBank"

const ListFoodBank = ({ data }) => {
	return (
		<div>
			{data.map((v) => (
				<FoodBank data={v} key={v.id} />
			))}
		</div>
	)
}

export default ListFoodBank
