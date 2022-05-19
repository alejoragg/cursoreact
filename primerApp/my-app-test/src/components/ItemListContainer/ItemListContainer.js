import ItemList from '../ItemList/ItemList';
import { Row } from 'reactstrap';
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    
    return(
        <div className="container mt-4">
            <Row>
                {products.map(product => <ItemList key={product.id} {...product} initial={1}/>)}
            </Row>
        </div>
    )
}

export default ItemListContainer 