import { FoodBankData } from "../api/foodBankAPI";
import { CalculateDistance } from "./CalculateDistance";
import { GetLocation } from "../api/getLocation";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { BallTriangle } from "react-loader-spinner";
import { API_KEY } from "../apiKeys/apiKeys";
import Map from "./Map";
import { useEffect, useState } from "react";

// const center = {
// 	lat: 51.514847,
// 	lng: -0.143215,
// };
// const title = "src";
const style = {
	margin: "1rem",
	height: "60vh",
	width: "95%",
};

const LocateFood = () => {
	const location = GetLocation();
	const currentLocation = {
		name: "src",
		lat: parseFloat(location.lat),
		lng: parseFloat(location.lng),
	};
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
	// console.log(currentLocation);

	// filter for only 10 km
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

	// console.log(filterData);

	const render = (status) => {
		if (status === Status.FAILURE) {
			console.log("error");
		} else {
			console.log("success");
		}
	};

	if (!foodBankData && !location && !filterData) {
		return (
			<div>
				<h1>Food bank</h1>
				<BallTriangle />
			</div>
		);
	} else {
		return (
			<div>
				<h1>Food bank</h1>
				<Wrapper apiKey={API_KEY} render={render}>
					<Map
						center={currentLocation}
						data={filterData}
						zoom={zoom}
						style={style}
					/>
				</Wrapper>
			</div>
		);
	}
};

export default LocateFood;
