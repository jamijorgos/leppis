import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { CATEGORIES } from '../utensils/Categories.js'
import { createProduct } from '../../actions/productActions';

const AdminPanel = () => {
    const [category, setCategory] = useState('valitse kategoria');
    const [prodData, setProdData] = useState({
        name: '', description: '', price: '', selectedFile: '', category: '', subcategory: ''
    })
    const dispatch = useDispatch();

    useEffect(() => {
        getSubCategory();
        setProdData({ ...prodData, category: category})
    }, [category])

    const getSubCategory = () => {
        const catSelected = CATEGORIES.filter(({name}) => name === category)[0]
        return (
          <div>
            <select id="admin-subselect" onChange={(e) => setProdData({ ...prodData, subcategory: e.target.value})}>
              {catSelected.minor.map(m => <option>{m}</option>)}
            </select>
          </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProduct(prodData))

        //clear();
    }
    const clear = () => {
        setProdData({ name: '', description: '', price: '', selectedFile: '', category: '', subcategory: '' })
        document.getElementById('admin-panel').reset();
        document.getElementById('admin-subselect').value = "";
    }

    return (
        <form id="admin-panel" autoComplete="off" noValidate onSubmit={handleSubmit}>
            <h1>admin panel</h1>
            <label>nimi</label>
            <input type="text" 
              value={prodData.name}
              onChange={(e) => setProdData({ ...prodData, name: e.target.value})}
              /> <br/>
            <label>kuvaus</label>
            <input type="text"
              value={prodData.description}
              onChange={(e) => setProdData({ ...prodData, description: e.target.value})}
              /><br/>
            <label>hinta</label>
            <input type="text" 
              value={prodData.price}
              onChange={(e) => setProdData({ ...prodData, price: e.target.value})}
              /> <br/>
            <label>kuva</label>
            <FileBase 
                type="file"
                multiple={false}
                value={prodData.selectedFile}
                onDone={({base64}) => setProdData({ ...prodData, selectedFile: base64})}         
            /> <br />
            <label>kategoria</label>
            <div>
                <select className="admin-select" onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map(({name}) => <option value={name}>{name}</option>)}
                </select> <br/>
                <label>ala-kategoria</label>
                {getSubCategory()}
            </div>
            <button type="submit">Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    )
}

export default AdminPanel