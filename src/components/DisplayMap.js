import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { API_KEY } from "../apiKeys/apiKeys";
import Map from "./Map";

const style = {
	margin: "1rem",
	height: "60vh",
	width: "95%",
};

const DisplayMap = ({ center, data, zoom }) => {
	const render = (status) => {
		if (status === Status.FAILURE) {
			console.log("error");
		} else {
			console.log("success");
		}
	};

	return (
		<div>
			<h1>Food bank</h1>
			<Wrapper apiKey={API_KEY} render={render}>
				<Map center={center} data={data} zoom={zoom} style={style} />
			</Wrapper>
		</div>
	);
};

export default DisplayMap;
