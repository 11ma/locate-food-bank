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
