import { FoodBankData } from "../api/foodBankAPI";
import { CalculateDistance } from "./CalculateDistance";
import { GetLocation } from "../api/getLocation";
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import DisplayMap from "./DisplayMap";
import ListFoodBank from "./ListFoodBank";

const LocateFood = () => {
	const location = GetLocation();
	const [foodBankData, setFoodBankData] = useState([]);
	const [err, setErr] = useState(null);
	const zoom = 13;

	useEffect(() => {
		FoodBankData()
			.then((data) => setFoodBankData(data))
			.catch((err) => {
				setErr(err);
			});
	}, []);
	console.log("error:", err);

	// filter for only 10 miles
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

	// console.log(filterData)

	if (foodBankData.length === 0 || location.length === 0) {
		return (
			<div>
				<h1>Food banks</h1>
				<BallTriangle />
			</div>
		);
	} else {
		return (
			<div>
				<DisplayMap center={location} data={filterData} zoom={zoom} />
				<ListFoodBank data={filterData} />
			</div>
		);
	}
};

export default LocateFood;
