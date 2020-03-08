import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
            window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (position) => setLng(position.coords.longitude),
            (err) => setErrorMessage(errorMessage: err.message)
            );
    }, []);

    return [lat, lng, errorMessage];
}