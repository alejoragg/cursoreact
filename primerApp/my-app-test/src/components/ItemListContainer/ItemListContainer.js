import ItemList from '../ItemList/ItemList';
import { Row } from 'reactstrap';

const ItemListContainer = () => {
    return(
        <div className="container mt-4">
            <Row>
                <ItemList
                    stock={8} 
                    description={'With supporting text below as a natural lead-in to additional content.'} 
                    image={'mac_render.png'} 
                    alt='MacBook Pro'
                    initial={1}
                />
            </Row>
        </div>
    )
}

export default ItemListContainer 