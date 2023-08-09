import React from 'react';
import './cards.components.css'

function CardsComponent({ hours }) {
    console.log(hours);
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                {
                    hours !== undefined
                    ?
                    hours.map(
                        (hour, index) => (
                            <div className='col-md-3 my-4' key={index}>
                                <div className="card text-white background-card">
                                    <div className={`card-body background-container-${index + 1}`}></div>
                                    <div className="card-body text-white text-left-v">
                                        <div className='row justify-content-center'>
                                            <div className='col-md-10'>
                                                <p className='text-white'>
                                                    {hour.is_closed === true ? 'Abierto!' : 'Cerrado'}
                                                </p>
                                            </div>
                                            <div className='col-md-2 background-container-options p-2'></div>
                                        </div>
                                        <h4>
                                            {hour.day}
                                        </h4>
                                        <p>
                                            {hour.opens_at} - {hour.closes_at}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                    :
                    <div>
                        <h3 className='text-white'>
                            Fatal error
                        </h3>
                    </div>
                }
            </div>
        </div>
    );
}

export default CardsComponent;
