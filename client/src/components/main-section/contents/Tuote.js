import React from 'react'
import owl from '../../../images/OWL.jpg'

const Tuote = ({ product }) => {
    return (
        <div className="prod-info">
            <div className="prod-flex">
                <h3 className="prod-name">{product.name}</h3>
                <textarea className="prod-desc" readOnly={true} value={product.description}/>
                <p className="prod-price">{product.price}</p>
                <img className="prod-img" src={product.selectedFile}/>
            </div>
        </div>
    )
}

export default Tuote
