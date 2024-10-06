import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchLocation = (locationId) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
                setLocation(response.data);
            } catch (err) {
                setError('Error al obtener la ubicación');
            } finally {
                setLoading(false);
            }
        };

        if (locationId) {
            fetchLocation();
        }
    }, [locationId]);

    return { location, loading, error };
};

export default useFetchLocation;