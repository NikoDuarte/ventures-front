import React from 'react';
import './info.components.css'

function InfoComponent({data, activeButton, handleButtonClick }) {
    const data_object = data[0]
    return (
        <div className="card background-card text-white h-75">
            <div className="card-body card-header-info">
                <img src={data_object?.logo} className='img-fluid w-25 img-radius d-block text-left'></img>
                <p className='text-left-v'>
                    <small>
                        Restaurant
                    </small>
                </p>
                <h2 className='text-left-v'>
                    {data_object?.name}
                </h2>
            </div>
            <div className="card-body">
                <button className={`btn btn-outline-link d-block ${activeButton === 'hours' ? 'text-white' : 'text-secondary'}`} onClick={() => handleButtonClick('hours')}>
                    Horarios
                </button>
                <button className={`btn btn-outline-link d-block ${activeButton === 'descriptions' ? 'text-white' : 'text-secondary'}`} onClick={() => handleButtonClick('descriptions')}>
                    Descripcion
                </button>
            </div>
        </div>
    );
}

export default InfoComponent;
