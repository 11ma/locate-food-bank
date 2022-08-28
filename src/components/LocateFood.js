import { FoodBankAPI } from "../api/FoodBankAPI"
import { CalculateDistance } from "./CalculateDistance"
import { GetLocation } from "../api/GetLocation"
import { GetIPLocation } from "../api/GetIPLocation"
import { useEffect, useState } from "react"

const LocateFood = () => {
	const myLocation = GetLocation()
	const [foodBankData, setFoodBankData] = useState([])
	const [IPLocation, setIPLocation] = useState([])
	const [err, setErr] = useState(null)

	useEffect(() => {
		FoodBankAPI()
			.then((data) => setFoodBankData(data))
			.catch((err) => {
				setErr(err)
			})
		GetIPLocation()
			.then((data) => setIPLocation(data))
			.catch((err) => {
				setErr(err)
			})
	}, [])

	// console.log(currentLocation);

	// console.log(foodBankData);

	// console.log(IPLocation[0].countryCode === "GB")

	// filter for only 10 km
	const filterData = foodBankData.filter((v) => {
		const getDistance = CalculateDistance(
			myLocation.lat,
			myLocation.lng,
			v.coord.lat,
			v.coord.lng
		)
		if (getDistance < 10) {
			return true
		} else {
			return false
		}
	})

	// console.log(filterData);
}

export default LocateFood
