import React, { useState } from 'react';
import Search from './Search.js'
import CarCard from './CarCard.jsx';
import cars from './Cars.js';



function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filterPosts = (cars, query) => {
    if (!query) {
        return cars;
    }
    return cars.filter((car) => {
        const postName = car.name.toLowerCase();
        return postName.includes(query);
    });
};
  const filteredPosts = filterPosts(cars, searchQuery);
  
  return (
    <div className='container'>
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="item-display" id="itemDisplay">
        <div className="item-container container">
          <div className="row car-row">
          {
            filteredPosts.map((e) => 
            (
                <CarCard
                key={e.key}
                name={e.name}
                price={'$' + e.price + "/day"}
                image={e.image}
                desc={e.desc}
                />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;