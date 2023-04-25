import React from 'react'
import './coffee.css';

const coffee = () => {
    const coffeeList = [
      {
        name: 'Latte',
        image: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_tight_288',
      },
      {
        name: 'Cappuccino',
        image: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_tight_288',
      },
      {
        name: 'Mocha',
        image: 'https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?impolicy=1by1_tight_288',
      },
      {
        name: 'Americano',
        image: 'https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288',
      },
      {
        name: 'Espresso',
        image: 'https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_tight_288',
      },
      
    ];
  
    return (
        <div className="coffee-container">
            <h2>Coffee</h2>
            <div className="coffee-list">
            {coffeeList.map((coffee) => (
                <div key={coffee.name} className="coffee-item">
                <img src={coffee.image} alt={coffee.name} className="coffee-image" />
                <h3>{coffee.name}</h3>
                </div>
            ))}
            </div>
        </div>
  )
}

export default coffee