import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ name, category, id, price, description, photos, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProduct } = useContext(CartContext)

    const handleCallback = (quantity) =>{
        console.log('agregado al carro', quantity)
        setQuantity(quantity)
        addItem({ id, name, price, quantity})
    }

    return(
        <div className="content mt-4">
            <h2 className='text-center'>Detalle de producto</h2>
            <div className="row col-10 mx-auto mt-4">
                <div className='image-thumb col-4' style={{backgroundImage:`url(${photos})`}}></div>
                <div className='col row'>
                    <div><b>Código:</b> {id}</div>
                    <div><b>Nombre ID:</b> {name}</div>
                    <div><b>Categoria:</b> {category}</div>
                    <div><b>Descripción:</b> {description}</div>
                    <div><b>Precio:</b> USD {price}</div>
                    <div><b>Stock:</b> {stock}</div>
                    { quantity > 0 
                        ? <div><Link to="/cart" className='btn btn-outline-success'>Terminar compra</Link></div>
                        : <div><ItemCount initial={getProduct(id)?.quantity} stock={stock} parentCallback={handleCallback}/></div>
                    }
                </div>
                
            </div>
        </div>
        
    )
}

export default ItemDetail