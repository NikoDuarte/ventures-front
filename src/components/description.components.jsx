import React from 'react';
import './descriptions.components.css'

function DescriptionComponent({ description_text }) {
    return (
        <div className="card text-white background-card">
            <div className="card-body background-container">
                
            </div>
            <div className="card-body text-white text-left-v">
                <h2>
                    Descripcion del restaurante
                </h2>
                <p>
                    {description_text}
                </p>
            </div>
        </div>
    );
}

export default DescriptionComponent;
