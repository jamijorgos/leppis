import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Tuote from './Tuote';

const Tuotteet = () => {
    const products = useSelector((state) => state.products)

    return (
        <div>
            <div className="prod-title-grid">
                <h2 className="prod-title">Tuotteet</h2>
                <h3 className="prod-subtitle">kategoria</h3>
            </div>
            <div className="prod-grid">
                {products.map((product) => (
                    <Tuote key={product._id} product={product}></Tuote>
                ))}
            </div>
        </div>
    )
}

export default Tuotteet
