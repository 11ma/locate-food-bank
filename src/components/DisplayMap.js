import { Wrapper, Status } from "@googlemaps/react-wrapper"
import Map from "./Map"
const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

const DisplayMap = ({ center, data, zoom }) => {
	const render = (status) => {
		if (status === Status.FAILURE) {
			console.log("error")
		} else {
			return
		}
	}

	return (
		<div>
			<Wrapper apiKey={API_KEY} render={render}>
				<Map center={center} data={data} zoom={zoom} />
			</Wrapper>
		</div>
	)
}

export default DisplayMap
