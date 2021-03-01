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
    const [prodData, setProdData] = useState({
        name: '', description: '', price: '', selectedFile: '', category: 'Leppäkertut', subcategory: ''
    })
    const dispatch = useDispatch();

    useEffect(() => {
        getSubCategory();
    }, [prodData.category])

    useEffect(() => {
      if (product) {
        setProdData(product);
        document.getElementById('admin-select').value = product.category;
      }
    }, [product]);

    // Ala-kategorian selectin vaihtoehdot luodaan ylä-kategorian mukaan
    const getSubCategory = () => {
        let catSelected = CATEGORIES.filter(({name}) => name === prodData.category)[0];
        
        return (
            <select id="admin-subselect" value={prodData.subcategory} onChange={(e) => setProdData({ ...prodData, subcategory: e.target.value})}>
              {catSelected.minor.map(m => <option key={m}>{m}</option>)}
            </select>
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
                    setProdData({ ...prodData, selectedFile: uri})
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

        if(validateForm() == true){
          if (currentId === 0) {
            dispatch(createProduct(prodData))
            clear();
          } else {
            dispatch(updateProduct(currentId, prodData));
            clear();
          }
          console.log("Tuotteen lisäys/muokkaus suoritettu")
        } else {
          console.log("virhe")
        }
    }
    // Kenttien tarkistus
    const validateForm = () => {
      var nimi = prodData.name;
      var desc = prodData.description;
      var price = prodData.price;
      var image = prodData.selectedFile;
      var cat = prodData.category;
      if (nimi == "") {
        alert("Tuotteen nimi puuttuu!");
        return false;
      }
      if (desc == "") {
        alert("Tuotteelta puuttuu kuvaus!");
        return false;
      }
      if (price == "") {
        alert("Tuotteelta puuttuu hinta!");
        return false;
      }
      if (image == "") {
        alert("Kuvaa ei valittu!");
        return false;
      }
      if (cat == "") {
        alert("Kategoria puuttuu!");
        return false;
      }
      return true;
    }
    // Kenttien tyhjennys, prodData nollaus
    const clear = () => {
        setCurrentId(0);
        setProdData({ name: '', description: '', price: '', selectedFile: '', category: 'Leppäkertut', subcategory: '' })
        document.getElementById('admin-form').reset();
    }

    return (
      <div id="admin-panel">
        <form id="admin-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
            <h1>{currentId === 0 ? 'Lisää tuote' : 'Muokkaa tietoja'}</h1>
            <label>Nimi</label>
            <input id="name-input" type="text" 
              value={prodData.name}
              onChange={(e) => setProdData({ ...prodData, name: e.target.value})}
              /> <br/>
            <label>kuvaus</label>
            <input id="desc-input" type="text"
              value={prodData.description}
              onChange={(e) => setProdData({ ...prodData, description: e.target.value})}
              /><br/>
            <label>hinta</label>
            <input id="price-input" type="text" 
              value={prodData.price}
              onChange={(e) => setProdData({ ...prodData, price: e.target.value})}
              /> <br/>
            <label>kuva</label>
            <input type="file" onChange={fileChangedHandler}/> <br/>
            <label>kategoria</label>
            <div>
                <select id="admin-select" value={prodData.category} onChange={(e) => setProdData({ ...prodData, category: e.target.value})}>
                {CATEGORIES.map(({name}) => <option key={name} value={name}>{name}</option>)}
                </select> <br/>
                <label>ala-kategoria</label> <br />
                {getSubCategory()}
            </div>
            <button type="submit">Tallenna</button> 
            <button type="button" onClick={clear}>Tyhjennä</button> <br />
            <img src={prodData.selectedFile} alt=''/>
        </form>
        <div className="admin-grid">
            <select className="admin-filter" onChange={(e) => setGlobalCategory(e.target.value)}>
                <option value=''>Kaikki</option>{CATEGORIES.map(({name}) => <option key={name} value={name}>{name}</option>)}
            </select> <br/>
            <Tuotteet editable={true} setCurrentId={setCurrentId} globalCategory={globalCategory}/>
        </div>
      </div>
        
    )
}

export default AdminPanel