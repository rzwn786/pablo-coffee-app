import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './tea.css';

const tea = () => {

    const teaList = [
        {
          name: 'Chai Tea Latte',
          image: 'https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Earl Grey Tea',
          image: 'https://globalassets.starbucks.com/assets/6f780d5d392542c6b9b1a4412881cecc.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Matcha Tea Latte ',
          image: 'https://globalassets.starbucks.com/assets/8b1b6d808cca4787afd2b30cf8dd5676.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Honey Citrus Tea',
          image: 'https://globalassets.starbucks.com/assets/a5e64777b3cc412e9239b8a37328cb37.jpg?impolicy=1by1_tight_288',
        },
        {
          name: 'Peach Tranquility',
          image: 'https://globalassets.starbucks.com/assets/f3ecda7d7510434c9ed2b3167dcb4466.jpg?impolicy=1by1_tight_288',
        },
        
      ];
  return (
    <div className="tea-container">
    <h2>Tea</h2>
    <div className="tea-list">
    {teaList.map((tea) => (
        <div key={tea.name} className="tea-item">
        <img src={tea.image} alt={tea.name} className="tea-image" />
        <h3>{tea.name}</h3>
        </div>
    ))}
    </div>
</div>
  )
}

export default tea