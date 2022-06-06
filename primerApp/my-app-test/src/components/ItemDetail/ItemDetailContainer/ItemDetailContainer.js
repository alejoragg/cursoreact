import { useState, useEffect } from 'react'
import { getProductsById } from '../../../asyncmock'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap'

const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(()=>{
                setSpinner(false)
         })
    }, [productId])
    if(spinner) {
        return <Spinner className="mt-4 spinner" animation="border" role="status" /> 
    }
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer