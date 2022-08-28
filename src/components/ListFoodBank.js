import FoodBank from "./FoodBank"
import styles from "../modules/ListFoodBank.module.scss"

const ListFoodBank = ({ data }) => {
	return (
		<div className={styles.ListFoodBankContainer}>
			{data.map((v) => (
				<FoodBank data={v} key={v.id} />
			))}
		</div>
	)
}

export default ListFoodBank
