import styles from "../modules/FoodBank.module.scss"

const FoodBank = ({ data }) => {
	return (
		<div className={styles.FoodBankContainer} key={data.id}>
			<p>{data.foodbank.name}</p>
			<p>{data.address}</p>
			<p>{data.foodbank.urls.html}</p>
		</div>
	)
}

export default FoodBank
