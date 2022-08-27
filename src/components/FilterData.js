import { CalculateDistance } from "./CalculateDistance";

export const FilterData = (data, location) => {
	if (data.length === 0 && location.length === 0) {
		return [];
	}
	const result = data.filter((v) => {
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
	return result;
};
