import React, { useState, useEffect } from 'react';
import './App.css';
import CardsComponent from './components/cards.components';
import InfoComponent from './components/info.components';
import { fetch_restaurant_random } from './api/restaurant.api'
import DescriptionComponent from './components/description.components';

function App() {

  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState('hours');

  const load_restaurant = () => {
    fetch_restaurant_random()
      .then(data_api => {
        const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase();

        const getIsClosed = (day) => {
          return day === currentDay ? true : false;
        };

        const data_api_map = [data_api]

        const mapper_data = data_api_map.map(elt => {
          const transformedData = Object.entries(elt.hours).map(([day, { opens_at, closes_at }]) => ({
            day,
            opens_at,
            closes_at,
            is_closed: getIsClosed(day)
          }));

          return {
            address: elt.address,
            description: elt.description,
            hours: transformedData,
            logo: elt.logo,
            name: elt.name
          };
        });

        setData(mapper_data);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    load_restaurant()
  }, []);

  const setComponentInteractive = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="App container vh-100">
      <section className='row justify-content-center h-100'>
        <div className='col-md-3 align-self-center'>
          <button className='btn btn-outline-link text-white' onClick={load_restaurant}>
            <i class='bx bx-radar bx-sm'></i>
          </button>
          <InfoComponent data={data} activeButton={activeButton} handleButtonClick={setComponentInteractive} />
        </div>
        <div className='col-md-9 align-self-center'>
          {activeButton === 'hours' ? <CardsComponent hours={data[0]?.hours} /> : <DescriptionComponent description_text={data[0]?.description} />}
        </div>
      </section>
    </div>
  );
}

export default App;
