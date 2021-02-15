import React from 'react'
import owl from '../../../images/OWL.jpg'

const Tuote = () => {
    return (
        <div className="prod-info">
            <div className="prod-flex">
                <h3 className="prod-name">Tuotteen nimi</h3>
                <textarea className="prod-desc" readOnly={true} value='Käsin maalattu kivi-pöllö, soveltuu myös pihakäyttöön, vedenkestävä'/>
                <p className="prod-price">Alkaen 10,50€</p>
                <img className="prod-img" src={owl}/>
            </div>
        </div>
    )
}

export default Tuote
