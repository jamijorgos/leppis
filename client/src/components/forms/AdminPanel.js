import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import Resizer from 'react-image-file-resizer';
import { CATEGORIES } from '../utensils/Categories.js'
import { createProduct } from '../../actions/productActions';
import Tuotteet from '../main-section/contents/Tuotteet';

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
    // Ala-kategorian select luodaan ylä-kategorian mukaan
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
    // Kuvatiedoston pienentäminen ja base64 parse (väliaikainen ratkaisu)
    const fileChangedHandler = (e) => {
        var fileInput = false
        if(e.target.files[0]) {
            fileInput = true
        }
        if(fileInput) {
            try {
                Resizer.imageFileResizer(
                e.target.files[0],
                200,
                200,
                'JPEG',
                100,
                0,
                uri => {
                    //console.log(uri) //testausta
                    setProdData({ ...prodData, selectedFile: uri})
                    //console.log(prodData); // testausta
                },
                'base64',
                150,
                150,
                );
            }   catch(err) {
                    console.log(err)
            }
        }
    }
    // Dispatch kun klikataan Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProduct(prodData))

        clear();
    }
    // Kenttien tyhjennys, prodData nollaus
    const clear = () => {
        setProdData({ name: '', description: '', price: '', selectedFile: '', category: '', subcategory: '' })
        document.getElementById('admin-form').reset();
        document.getElementById('admin-subselect').value = "";
    }

    return (
      <div id="admin-panel">
        <form id="admin-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
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
            <input type="file" onChange={fileChangedHandler}/>
            <img src={prodData.selectedFile} alt=''/> <br />
            <label>kategoria</label>
            <div>
                <select className="admin-select" onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map(({name}) => <option value={name}>{name}</option>)}
                </select> <br/>
                <label>ala-kategoria</label>
                {getSubCategory()}
            </div>
            <button type="submit">Tallenna</button>
            <button onClick={clear}>Tyhjennä</button>
        </form>
        <Tuotteet editable={true}/>
      </div>
        
    )
}

export default AdminPanel