import ItemList from '../ItemList/ItemList';
import { Row, Spinner } from 'reactstrap';
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
//import Property from '../Property/Property';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
            setSpinner(false)
        })
    }, [])

    return(
        <div className="container mt-4">
            {spinner ? <Spinner className="spinner" animation="border" role="status" /> : null }
            <Row>
                {products.map(product => <ItemList key={product.id} {...product} initial={1}/>)}
                {/*<Property/>*/}
            </Row>
        </div>
    )
}

export default ItemListContainer 