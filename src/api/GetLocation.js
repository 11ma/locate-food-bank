import { useEffect, useState } from "react"

export const GetLocation = () => {
	const [currentLocation, setCurrentLocation] = useState([])

	useEffect(() => {
		const location = async () => {
			navigator.geolocation.getCurrentPosition((position) => {
				setCurrentLocation({
					lat: parseFloat(position.coords.latitude),
					lng: parseFloat(position.coords.longitude),
				})
			})
		}
		location()
	}, [])

	return currentLocation
}
