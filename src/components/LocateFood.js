import { GetFood } from "../api/customHook";
import GetLocation from "../api/GetLocation";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { API_KEY } from "../apiKeys/apiKeys";
import Map from "./Map";

const LocateFood = () => {
	const [foodBankData, setFoodBankData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const data = await GetFood();
			setFoodBankData(data);
		};
		getData();
	}, []);

	const render = (status) => {
		if (status === Status.FAILURE) {
			console.log("error");
		} else {
			console.log("success");
		}
	};

	const locationData = GetLocation();

	if (!foodBankData) {
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
				<h2>my lat: {locationData.lat}</h2>
				<h2>my lng: {locationData.lng}</h2>
				<Wrapper apiKey={API_KEY} render={render}>
					<Map data={foodBankData} />
				</Wrapper>
			</div>
		);
	}
};

export default LocateFood;
