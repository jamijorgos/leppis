import React from 'react'
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deleteProduct } from '../../../actions/productActions';

const Tuote = ({ product, editable, setCurrentId }) => {
    //{product._id} - dispatch patch/delete
    const dispatch = useDispatch();

    const editClick = () => {
      setCurrentId(product._id)
    }
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

    return (
        <div className="prod-info">
            <div className="prod-flex">
                <h3 className="prod-name">{product.name}</h3>
                <textarea className="prod-desc" readOnly={true} value={product.description}/>
                <p className="prod-price">{product.price}</p>
                <img className="prod-img" src={product.selectedFile}/>
                {editable === true ? 
                    <div>
                        <button onClick={editClick}>Edit</button>
                        <button onClick={deleteClick}>Delete</button> <br />
                        <label>{product.category}</label> <br />
                        <label>{product.subcategory}</label> <br />
                        <label>{product._id}</label> <br />
                    </div> : null}
            </div>
        </div>
    )
}

export default Tuote
