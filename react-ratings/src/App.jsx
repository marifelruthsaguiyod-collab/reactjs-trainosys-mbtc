import React, { useState } from 'react';
import RatingsComponent from './components/RatingsComponent';

function App() {

  const [rating, setRating] = useState(4)

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rating (Max of 5 Stars): {rating}</h1>
      <RatingsComponent
        value={rating}
        maxValue={5}
        onChange={setRating}
      />

      <br></br>
      <h2>Rating (Max of 10 Stars): {rating}</h2>
      <RatingsComponent
        value={rating}
        maxValue={10}
        onChange={setRating}
      />
    </div>
  );
}

export default App;