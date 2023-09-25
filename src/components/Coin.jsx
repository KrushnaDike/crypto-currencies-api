import React from 'react';

const Coin = ({name, symbol, imgSrc, price}) => {
  return (
    <div className="coin">
        <img src={imgSrc} alt={name} />
        <h1>{symbol}</h1>
        <div>{name}</div>
        <h4>₹{price}</h4>
    </div>
  );
};

export default Coin;