import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ItemDetail = ({ name, category, id, price, description, photos, stock }) => {

    const [buttonCar, setButtonCar] = useState(false)
    const handleCallback = (e) =>{
        console.log('agregado al carro', e)
        setButtonCar(true)
    }
    return(
        <div className="content mt-4">
            <h2 className='text-center'>Detalle de producto</h2>
            <div className="row col-10 mx-auto mt-4">
                <div className='image-thumb col-4' style={{backgroundImage:`url(${photos[0].thumb})`}}></div>
                <div className='col row'>
                    <div><b>Código:</b> {id}</div>
                    <div><b>Nombre ID:</b> {name}</div>
                    <div><b>Categoria:</b> {category}</div>
                    <div><b>Descripción:</b> {description}</div>
                    <div><b>Precio:</b> USD {price}</div>
                    <div><b>Stock:</b> {stock}</div>
                    <div className=''>
                        {!buttonCar ? <ItemCount initial={1} stock={stock} parentCallback={handleCallback}/> : null}
                    </div>
                    <div>
                        {buttonCar ? <Link to="/cart" className='btn btn-outline-success'>Terminar compra</Link> : null}
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default ItemDetail