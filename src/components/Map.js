import { useState, useEffect, useRef } from "react"
import foodIcon from "../assets/food-cart.png"

const Map = ({ data, center, zoom, style }) => {
	const ref = useRef(null)
	const [map, setMap] = useState()

	useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center: center,
					zoom: zoom,
				})
			)
		}
	}, [ref, map, center, zoom])

	new window.google.maps.Marker({
		position: center,
		map,
		title: "current location",
	})

	useEffect(() => {
		setTimeout(() => {
			for (let i = 0; i < data.length; i++) {
				const contentString = data[i].foodbank.name

				const infowindow = new window.google.maps.InfoWindow({
					content: contentString,
				})

				const position = {
					lat: data[i].coord.lat,
					lng: data[i].coord.lng,
				}

				const marker = new window.google.maps.Marker({
					position: position,
					map,
					title: contentString,
					icon: foodIcon,
					optimized: true,
				})

				if (marker) {
					;["click"].forEach((eventName) =>
						window.google.maps.event.clearListeners(marker, eventName)
					)

					marker.addListener("click", () => {
						infowindow.open({
							anchor: marker,
							map,
							shouldFocus: false,
						})
					})
				}
			}
		}, 2000)
	}, [map, data])

	return <div ref={ref} id="map" style={{ margin: "1rem", height: "60vh" }} />
}

export default Map
