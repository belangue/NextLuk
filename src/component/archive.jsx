import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <div className='main'>
        <p>NeXTLuK</p>
        <input type='text' placeholder='search...' name='search'></input>
        <select >
          <option>price</option>
          <option>High to low</option>
          <option>Low to High</option>
        </select>
        <select >
          <option>Town</option>
          <option>Yaounde</option>
          <option>Douala</option>
          <option>Adamawa</option>
          <option>Buea</option>
          <option>Bertoua</option>
          <option>Bamenda</option>
        </select>
      </div>
    </div>
  );
}

export default App;
