import ItemList from '../ItemList/ItemList';
import { Row, Spinner } from 'reactstrap';
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting, handlePage}) => {
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setSpinner(true)
        if(!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            }).finally(()=>{
                setSpinner(false)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).finally(()=>{
                setSpinner(false)
            })
        }
    }, [categoryId])

    if(spinner) {
        return <Spinner className="mt-4 spinner" animation="border" role="status" /> 
    }

    return(
        <div className="container mt-4">
            <h1>{greeting}</h1>
            <Row>
                {products.map(product => <ItemList key={product.id} {...product} initial={1} handlePage={handlePage}/>)}
            </Row>
        </div>
    )
}

export default ItemListContainer 