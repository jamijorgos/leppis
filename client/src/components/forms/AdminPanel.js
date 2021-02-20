import React, { useState, useEffect } from 'react'

const AdminPanel = () => {
    const [category, setCategory] = useState('Leppäkertut');

    useEffect(() => {
        getSubCategory();
    }, [category])

    const CATEGORIES = [
        {
            name: 'Leppäkertut', 
            minor: ['magneetit', 'neulat', 'pinssit', 'korvakorut',
            'kaulakorut', 'leppäkerttukivet', 'kivileppäkertut', 'avaimenperät']
        }, {
            name: 'Tuikuttimet', 
            minor: []
        }, {
            name: 'Uusiolasit',
            minor: ['Lasialuset', 'Saksitelineet']
        }, {
            name: 'Kierrätyskäsityö',
            minor: ['Kahvipussikassit', 'Minikassakaapit', 'Sisustustikkaat',
            'Peilit', 'Muut']
        }
    ]
    const getSubCategory = () => {
        const catSelected = CATEGORIES.filter(({name}) => name === category)[0]
        return (
          <div>
            <select>
              {catSelected.minor.map(m => <option>{m}</option>)}
            </select>
          </div>
        )
    }

    return (
        <div className="admin-panel">
            <h1>admin panel</h1>
            <label>nimi</label>
            <input type="text" ></input> <br/>
            <label>kuvaus</label>
            <input type="text" ></input> <br/>
            <label>hinta</label>
            <input type="text" ></input> <br/>
            <label>kuva</label>
            <input type="text" ></input> <br/>

            <label>kategoria</label>
            <div>
                <select onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map(({name}) => <option value={name}>{name}</option>)}
                </select> <br/>
                <label>ala-kategoria</label>
                {getSubCategory()}
            </div>
        </div>
    )
}

export default AdminPanel