import { useEffect, useState } from "react"

// get foodbank data
export const FoodBankAPI = async () => {
	const filteredData = []
	const res = await fetch(`https://www.givefood.org.uk/api/2/locations/`)
	if (res.ok) {
		const getData = await res.json()
		for (let i = 0; i < getData.length; i++) {
			let splitLatLng = getData[i].lat_lng.split(",")
			let idGen = i + 1
			let obj = {
				id: idGen,
				foodbank: getData[i].foodbank,
				email: getData[i].email,
				phone: getData[i].phone,
				address: getData[i].address,
				postcode: getData[i].postcode,
				coord: {
					lat: parseFloat(splitLatLng[0]),
					lng: parseFloat(splitLatLng[1]),
				},
			}
			filteredData.push(obj)
		}
	}
	return filteredData
}

// get current location
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

// get ip location
export const GetIPLocation = async () => {
	const IPLocation = []
	const res = await fetch(
		`http://ip-api.com/json/?fields=status,message,country,countryCode`
	)
	if (res.status !== "fail") {
		const getData = await res.json()
		IPLocation.push(getData)
	}
	return IPLocation
}
