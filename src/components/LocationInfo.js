import React from 'react';
import ResidentCard from './ResidentCard';

const LocationInfo = ({ location }) => {
    return (
        <div className="location-info">
            <h2>{location.name}</h2>
            <p>Tipo: {location.type}</p>
            <p>Dimensión: {location.dimension}</p>
            <p>Residentes: {location.residents.length}</p>

            <h3>Residentes:</h3>
            <div className="resident-list">
                {location.residents.map((residentUrl) => (
                    <ResidentCard key={residentUrl} url={residentUrl} />
                ))}
            </div>
        </div>
    );
};

export default LocationInfo;