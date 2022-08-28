import styles from "../modules/FoodBank.module.scss"
// const style = {
// 	border: "1px solid black",
// 	margin: "5px",
// 	padding: "5px",
// 	textAlign: "center",
// }

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
