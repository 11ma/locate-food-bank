import { FoodBankAPI } from "../api/getData"
import { GetLocation } from "../api/getData"
import { GetIPLocation } from "../api/getData"
import { BallTriangle } from "react-loader-spinner"
import { useEffect, useState } from "react"
import DisplayMap from "./DisplayMap"
import ListFoodBank from "./ListFoodBank"
import { FilterData } from "../helper/filterData"
import styles from "../modules/LocateFood.module.scss"

const LocateFood = () => {
	const myLocation = GetLocation()
	const [foodBankData, setFoodBankData] = useState([])
	const [country, setCountry] = useState([])
	const [err, setErr] = useState(null)
	const zoom = 13

	useEffect(() => {
		FoodBankAPI()
			.then((data) => setFoodBankData(data))
			.catch((err) => {
				setErr(err)
			})
		GetIPLocation()
			.then((data) => setCountry(data[0].country))
			.catch((err) => {
				setErr(err)
			})
	}, [])

	// console.log("error:", err)
	// console.log("location:", myLocation)
	// console.log("data:", foodBankData)
	// console.log("country:", country)

	// filter for only 10 miles
	const filterData = FilterData(foodBankData, myLocation)

	if (err !== null) {
		window.location.reload()
	} else if (country !== "United Kingdom") {
		return (
			<div className={styles.LoadingContainer}>
				<h1 className={styles.LoadingTitle}>Food bank</h1>
				<h2>Not available for {country} </h2>
			</div>
		)
	} else if (filterData.length === 0 || myLocation.length === 0) {
		return (
			<div className={styles.LoadingContainer}>
				<h1 className={styles.LoadingTitle}>Food bank</h1>
				<BallTriangle wrapperClass={styles.LoadingBall} />
			</div>
		)
	} else {
		return (
			<div>
				<h1 className={styles.Title}>Food bank</h1>
				<DisplayMap center={myLocation} data={filterData} zoom={zoom} />
				<ListFoodBank data={filterData} />
			</div>
		)
	}
}

export default LocateFood
