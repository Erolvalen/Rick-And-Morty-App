import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentDetail = ({ url }) => {
    const [resident, setResident] = useState(null);
    
    useEffect(() => {
        const fetchResident = async () => {
            const response = await axios.get(url);
            setResident(response.data);
        };

        fetchResident();
    }, [url]);

    if (!resident) return null;

    return (
        <li className="resident-detail">
            <h4>{resident.name}</h4>
            <img src={resident.image} alt={resident.name} />
            <p>Status: {resident.status}</p>
            <p>Lugar de origen: {resident.origin.name}</p>
            <p>Episodios: {resident.episode.length}</p>
        </li>
    );
};

export default ResidentDetail;