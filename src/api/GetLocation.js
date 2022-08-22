import { useEffect, useState } from "react";

const GetLocation = () => {
	const [currentLocation, setCurrentLocation] = useState([]);

	useEffect(() => {
		const location = async () => {
			navigator.geolocation.getCurrentPosition((position) => {
				setCurrentLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			});
		};
		location();
	}, []);

	return currentLocation;
};

export default GetLocation;
