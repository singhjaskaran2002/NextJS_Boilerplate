import { useEffect, useState } from "react";

const usePosition = () => {
	const [position, setPosition] = useState<GeolocationPosition | null>(null);

	useEffect(() => {
		const getPosition = () => {
			navigator.geolocation.getCurrentPosition(
				(currPosition) => setPosition(currPosition),
				() => setPosition(null)
			);
		};

		getPosition();
	}, []);

	return position;
};

export default usePosition;
