import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Tuote from './Tuote';

const Tuotteet = ({ editable, setCurrentId, globalCategory, globalSubCategory }) => {
    let products = useSelector((state) => state.products);

    if(globalCategory){
        products = products.filter(product => product.category === globalCategory)
        if(globalSubCategory){
            products = products.filter(product => product.subcategory === globalSubCategory)
        }
    }

    return (
        <div>
            <div className="prod-title-grid">
                <h2 className="prod-title">{globalCategory == (null || '') ? 'Tuotteet' : globalCategory}</h2>
                <h3 className="prod-subtitle">{globalSubCategory}</h3>
            </div>
            <div className="prod-grid">
                {(products.length <= 0 ? <h3 className="prod-placeholder">Ei vielä tuotteita</h3> : 
                products.map((product) => (
                    <Tuote key={product._id} product={product} editable={editable} setCurrentId={setCurrentId}></Tuote>
                )))}
            </div>
            
        </div>
    )
}

export default Tuotteet
