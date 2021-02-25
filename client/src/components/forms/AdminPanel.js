import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Resizer from 'react-image-file-resizer';
import { CATEGORIES } from '../utensils/Categories.js'
import { createProduct, updateProduct } from '../../actions/productActions';
import Tuotteet from '../main-section/contents/Tuotteet';

const AdminPanel = () => {
    const [currentId, setCurrentId] = useState(0);
    const [globalCategory, setGlobalCategory] = useState();
    const product = useSelector((state) => (currentId ? state.products.find((product) => product._id === currentId) : null));
    const [category, setCategory] = useState('valitse kategoria');
    const [prodData, setProdData] = useState({
        name: '', description: '', price: '', selectedFile: '', category: '', subcategory: ''
    })
    const dispatch = useDispatch();

    useEffect(() => {
        getSubCategory();
        setProdData({ ...prodData, category: category})
    }, [category])

    useEffect(() => {
      if (product) {
        setProdData(product);
        document.getElementById('admin-select').value = product.category;
      }
    }, [product]);

    // Ala-kategorian select luodaan ylä-kategorian mukaan
    const getSubCategory = () => {
        const catSelected = CATEGORIES.filter(({name}) => name === category)[0]
        return (
          <div>
            <select id="admin-subselect" onChange={(e) => setProdData({ ...prodData, subcategory: e.target.value})}>
              {catSelected.minor.map(m => <option key={m}>{m}</option>)}
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
          dispatch(createProduct(prodData))
          clear();
        } else {
          dispatch(updateProduct(currentId, prodData));
          clear();
        }
    }
    // Kenttien tyhjennys, prodData nollaus
    const clear = () => {
        setCurrentId(0);
        setProdData({ name: '', description: '', price: '', selectedFile: '', category: '', subcategory: '' })
        document.getElementById('admin-form').reset();
        document.getElementById('admin-subselect').value = "";
    }

    return (
      <div id="admin-panel">
        <form id="admin-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
            <h1>admin panel</h1>
            <select className="admin-filter" onChange={(e) => setGlobalCategory(e.target.value)}>
                <option value=''>Kaikki</option>{CATEGORIES.map(({name}) => <option key={name} value={name}>{name}</option>)}
                </select> <br/>
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
                <select id="admin-select" onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map(({name}) => <option key={name} value={name}>{name}</option>)}
                </select> <br/>
                <label>ala-kategoria</label>
                {getSubCategory()}
            </div>
            <button type="submit">Tallenna</button>
            <button type="button" onClick={clear}>Tyhjennä</button>
        </form>
        <Tuotteet editable={true} setCurrentId={setCurrentId} globalCategory={globalCategory}/>
      </div>
        
    )
}

export default AdminPanel