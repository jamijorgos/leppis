import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deleteProduct } from '../../../actions/productActions';

const Tuote = ({ product, editable, setCurrentId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        addAdminCss();
    }, []);

    // (AdminPanel) Tuote viedään editoitavaksi admin-formiin
    const editClick = () => {
      setCurrentId(product._id)
    }
    // (AdminPanel) Tuotteen poistolle
    const deleteClick = () => {
        confirmAlert({
            title: 'Oletko varma?',
            message: 'Tuote poistetaan pysyvästi',
            buttons: [
              {
                label: 'Kyllä',
                onClick: () => dispatch(deleteProduct(product._id))
              },
              {
                label: 'Ei',
              }
            ]
          });
    }
    // (AdminPanel) Admin tuote-gridin oma css
    const addAdminCss= () => {
        const prod = document.querySelectorAll('.prod-flex');
        
        prod.forEach((item) => editable === true ? 
          item.classList.add('admin-flex') : 
          item.classList.remove('admin-flex'))
    }

    return (
        <div className="prod-info">
            <div className="prod-flex">
                <h3 className="prod-name">{product.name}</h3>
                <textarea className="prod-desc" readOnly={true} value={product.description}/>
                <p className="prod-price">{product.price}</p>
                <img className="prod-img" src={product.selectedFile}/>  
                {editable === true ? // Renderöidään vain Admin paneelin yhteydessä 
                    <div className="admin-info-grid">
                      <div className="admin-lbls">
                        <label className="admin-lbl" >{product.category}</label> <br />
                        <label className="admin-lbl">{product.subcategory}</label> <br />
                      </div>
                      <div className="admin-btns">
                        <button className="admin-btn edit-btn" onClick={editClick}>Muokkaa</button> <br />
                        <button className="admin-btn delete-btn" onClick={deleteClick}>Poista</button> <br />
                      </div>
                    </div> : 
                    <h3 className="prod-categ">{product.category}</h3>}
            </div>
        </div>
    )
}

export default Tuote
