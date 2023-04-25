import React from 'react'
import './cakepastry.css';

const cakespastry = () => {
    const cakeList = [
        {
          name: 'Plain Bagel',
          image: 'https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Chocolate Brownie',
          image: 'https://globalassets.starbucks.com/assets/f827715797044a78bb79b86728a079cf.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Butter Croissant',
          image: 'https://globalassets.starbucks.com/assets/e39e1d6044634535a027301d982c5842.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Red Velvet Loaf',
          image: 'https://globalassets.starbucks.com/assets/94a08a1ea84f465f86fdfe22c035598c.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Cheese Danish',
          image: 'https://globalassets.starbucks.com/assets/b87eeb626b344c4a8ccb042e4aff4ab9.jpg?impolicy=1by1_tight_288',
        },
        
      ];
  return (
    <div className="cake-container">
    <h2>Cakes & Pastry</h2>
    <div className="coffee-list">
    {cakeList.map((cake) => (
        <div key={cake.name} className="cake-item">
        <img src={cake.image} alt={cake.name} className="cake-image" />
        <h3>{cake.name}</h3>
        </div>
    ))}
    </div>
</div>
  )
}

export default cakespastry