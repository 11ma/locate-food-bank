export const FoodBankAPI = async () => {
	const filteredData = []
	const res = await fetch(`https://www.givefood.org.uk/api/2/locations/`)
	if (res.ok) {
		const getData = await res.json()
		for (let i = 0; i < getData.length; i++) {
			let splitLatLng = getData[i].lat_lng.split(",")
			let obj = {
				name: getData[i].name,
				email: getData[i].email,
				coord: {
					lat: splitLatLng[0],
					lng: splitLatLng[1],
				},
				postcode: getData[i].postcode,
				url: getData[i].url,
			}
			filteredData.push(obj)
		}
	}
	return filteredData
}
