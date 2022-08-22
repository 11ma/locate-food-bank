export const GetFood = async () => {
	const data = [];

	const res = await fetch(`https://www.givefood.org.uk/api/2/locations/`);
	if (res.ok === true) {
		const getData = await res.json();
		for (let i = 0; i < getData.length; i++) {
			let splitLatLng = getData[i].lat_lng.split(",");
			let obj = {
				name: getData[i].name,
				lat: splitLatLng[0],
				lng: splitLatLng[1],
			};

			data.push(obj);
		}
	}

	return data;
};
