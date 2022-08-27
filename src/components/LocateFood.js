import { FoodBankData } from "../api/FoodBankAPI";
import { GetLocation } from "../api/GetLocation";
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import DisplayMap from "./DisplayMap";
import ListFoodBank from "./ListFoodBank";
import { FilterData } from "./FilterData";

const LocateFood = () => {
	const myLocation = GetLocation();
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
	const filterData = FilterData(foodBankData, myLocation);

	if (filterData.length === 0) {
		console.log("nothing here yet");
	} else {
		console.log(filterData);
	}

	if (filterData.length === 0 || myLocation.length === 0) {
		return (
			<div>
				<h1>Food banks</h1>
				<BallTriangle />
			</div>
		);
	} else if (err !== null) {
		window.location.reload();
	} else {
		return (
			<div>
				<DisplayMap center={myLocation} data={filterData} zoom={zoom} />
				<ListFoodBank data={filterData} />
			</div>
		);
	}
};

export default LocateFood;
