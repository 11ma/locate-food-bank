export const FoodBankData = async () => {
	const filteredData = [];
	const res = await fetch(`https://www.givefood.org.uk/api/2/locations/`);
	if (res.ok) {
		const getData = await res.json();
		for (let i = 0; i < getData.length; i++) {
			let splitLatLng = getData[i].lat_lng.split(",");
			let obj = {
				foodbank: getData[i].foodbank,
				email: getData[i].email,
				phone: getData[i].phone,
				coord: {
					lat: parseFloat(splitLatLng[0]),
					lng: parseFloat(splitLatLng[1]),
				},
				postcode: getData[i].postcode,
			};
			filteredData.push(obj);
		}
	}
	return filteredData;
};
