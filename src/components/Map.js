import { useState, useEffect, useRef } from "react";

const zoom = 13;
const center = {
	lat: 51.514847,
	lng: -0.143215,
};
// const title = "Regent Hall";
const style = {
	margin: "1rem",
	height: "60vh",
	width: "95%",
};

const Map = ({ data }) => {
	const ref = useRef(null);
	const [map, setMap] = useState();

	useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center: center,
					zoom: zoom,
				})
			);
		}
	}, [ref, map]);

	useEffect(() => {
		setTimeout(() => {
			for (let i = 0; i < data.length; i++) {
				const contentString = data[i].name;

				const infowindow = new window.google.maps.InfoWindow({
					content: contentString,
				});

				const position = { lat: data[i].lat++, lng: data[i].lng++ };

				const marker = new window.google.maps.Marker({
					position: position,
					map,
					title: contentString,
					optimized: true,
				});

				if (marker) {
					["click"].forEach((eventName) =>
						window.google.maps.event.clearListeners(marker, eventName)
					);

					marker.addListener("click", () => {
						infowindow.open({
							anchor: marker,
							map,
							shouldFocus: false,
						});
					});
				}
			}
		}, 2000);

		// const contentString = title;

		// const infowindow = new window.google.maps.InfoWindow({
		// 	content: contentString,
		// });

		// const marker = new window.google.maps.Marker({
		// 	position: center,
		// 	map,
		// 	title: contentString,
		// 	optimized: true,
		// });

		// if (marker) {
		// 	["click"].forEach((eventName) =>
		// 		window.google.maps.event.clearListeners(marker, eventName)
		// 	);

		// 	marker.addListener("click", () => {
		// 		infowindow.open({
		// 			anchor: marker,
		// 			map,
		// 			shouldFocus: false,
		// 		});
		// 	});
		// }
	}, [map, data]);

	return <div ref={ref} id="map" style={style} />;
};

export default Map;
