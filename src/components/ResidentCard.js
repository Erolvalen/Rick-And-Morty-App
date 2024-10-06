import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResidentCard.css'; // Asegúrate de que esta línea esté presente

const ResidentCard = ({ url }) => {
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
        <div className="resident-card">
            <img src={resident.image} alt={resident.name} />
            <h4>{resident.name}</h4>
            <p>Status: {resident.status}</p>
            <p>Lugar de origen: {resident.origin.name}</p>
            <p>Episodios: {resident.episode.length}</p>
        </div>
    );
};

export default ResidentCard;