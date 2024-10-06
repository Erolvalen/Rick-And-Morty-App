import React, { useState } from 'react';
import useFetchLocation from './hooks/useFetchLocation';
import LocationInfo from './components/LocationInfo';
import Header from './components/header';
import './App.css';

const App = () => {
    const [locationId, setLocationId] = useState('');
    const [inputValue, setInputValue] = useState('');

    const { location, loading, error } = useFetchLocation(locationId);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value >= 1 && value <= 126) {
            setInputValue(value);
        } else {
            setInputValue('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            setLocationId(inputValue);
        }
    };

    return (
        <div className="app-container">
            <Header />
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="number" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Ingrese ID de ubicación (1-126)" 
                />
                <button type="submit">Buscar</button>
            </form>

            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {location && <LocationInfo location={location} />}
        </div>
    );
};

export default App;