import React, { Fragment, useEffect, useState } from 'react';

// importing component
import Coin from './Coin';
import axios from 'axios';
import Loader from './Loader';

const Home = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {

        const fetchAllCoins = async () => {

            try {
                
                // fetch api to get currency data
                const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=50")

                console.log(data);

                setCoins(data);
                setLoading(false);

            } catch (error) {
                alert("Not working, try after some time!");
            }
           
        }

        fetchAllCoins();

    }, []); // if we pass an empty array it will re-render when useState variable updated    

  return (
    <Fragment>
        {/* all coins */}
        <div className="home">
            {
                loading ? (
                    <Loader />
                ) : (
                    coins.map((Item)=> (
                        <Coin 
                            name={Item.name} 
                            symbol={Item.symbol}
                            imgSrc={Item.image} 
                            price={Item.current_price}
                            key={Item.id}    
                        />
                    ))
                )
            }
        </div>

    </Fragment>
  );
};

export default Home;