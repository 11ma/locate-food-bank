import { FoodBankData } from "../api/foodBankAPI";
import { CalculateDistance } from "./CalculateDistance";
import { GetLocation } from "../api/getLocation";
import { useEffect, useState } from "react";

const LocateFood = () => {
	const [foodBankData, setFoodBankData] = useState([]);
	const [err, setErr] = useState(null);

	useEffect(() => {
		FoodBankData()
			.then((data) => setFoodBankData(data))
			.catch((err) => {
				setErr(err);
			});
	}, []);

	// console.log(foodBankData);
	// filter for only 10 km
	const location = GetLocation();
	const filterData = foodBankData.filter((v) => {
		const getDistance = CalculateDistance(
			location.lat,
			location.lng,
			v.coord.lat,
			v.coord.lng
		);
		if (getDistance < 10) {
			return true;
		} else {
			return false;
		}
	});

	console.log(filterData);
};

export default LocateFood;
