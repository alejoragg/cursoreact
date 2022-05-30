import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'reactstrap';

const ItemDetail = ({ name, category, id, price, description, photos, stock }) => {
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
                    <div className='col-4'>
                        <ItemCount initial={1} stock={stock}/>
                    </div>
                    <div className='col-8'>
                        <Button className='mt-2 btn btn-outline-success' outline>Agregar al Carro</Button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default ItemDetail