import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Card = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      setPrices(data.bpi);
    };
    fetchPrices();
  }, []);

  return (
        <>
        <h3>Task 3</h3>
        <div className='d-flex justify-content-center mx-auto'>
    {prices && Object.keys(prices).map(currency => (
        <div className="card" key={currency} style={{ width: '18rem', margin: '10px' }}>
            <div className="card-body">
                <h5 className="card-title">{currency}</h5>
                <p className="card-text">
                    Price: {prices[currency].rate}</p>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: prices[currency].symbol}}></p>

                    <p className="card-text">
                    Currency: {prices[currency].description}</p>
                    <p className="card-text">
                    Rate: {prices[currency].rate_float}</p>
                    <p className="card-text">
                    Description: {prices[currency].description}
                </p>
            </div>
        </div>
    ))}
</div>

    </>
  );
};

export default Card;
