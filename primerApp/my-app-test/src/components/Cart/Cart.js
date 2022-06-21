import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { Button } from 'reactstrap'
import { Link } from "react-router-dom"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    
    let subtotal = 0
    const suma = (precio) => { 
        subtotal += precio
    }
    const [buyer, setBuyer] = useState({
        name: 'Test user',
        email: 'email@gmail.com',
        phone: '11233211233',
        address: 'Lago Mayor 6'
    })

    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            buyer,
            item: cart,
            total: subtotal
        }

        const idCart = cart.map(prod => prod.id)
        console.log(idCart)
        const batch = writeBatch(db)
        const noStock = []
        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', idCart)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const userStock = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= userStock){
                        batch.update(doc.ref, {stock: dataDoc.stock - userStock })
                    }else{
                        noStock.push({id:doc.id, ...dataDoc})
                    }
                })
            }).then(()=>{
                if(noStock.length===0){
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                }else{
                    return Promise.reject({type:'sin_stock', products: noStock })
                }
            }).then(({id})=>{
                batch.commit()
                setMessage(`El id de la orden es ${id}`)
                clearCart()
            }).catch(error => {
                setMessage(`Algunos productos no tienen stock`)
            }).finally(() => {
                setLoading(false)
            })
    }
    if(loading){
        return <h1>Creando Orden</h1>
    } 
    return(
        <div className="text-center mt-4">
            <h1>Carrito</h1>
            {message ? message : ''}
            <div className="col-10 mx-auto">
                {cart.map(prod=> {
                    suma(prod.price * prod.quantity)
                    return(
                        <div key={prod.id} className="row my-2 outline p-2">
                            <div className="col"><Link to={'/detail/'+prod.id}>Nombre: {prod.name}</Link></div>
                            <div className="col">Cantidad: {prod.quantity}</div>
                            <div className="col">Precio: {prod.price}</div>
                            <div className="col">Subtotal: { prod.price * prod.quantity }</div>
                            <div className="col">
                                <Button className="btn btn-danger" onClick={()=>removeItem(prod.id)}>X</Button>
                            </div>
                        </div>
                    )
                })}
                
                    {cart.length > 0 ? 
                        <div>
                            <div className="total my-4">Total: {subtotal}</div>
                            <div className="row">
                                <div className="col"><Button onClick={()=>clearCart()} className="btn btn-outline-danger" outline>Limpiar Carro</Button></div>
                                {/*<ContactForm setBuyer={setBuyer} />*/}
                                <div className="col"><Button onClick={()=>createOrder()}>Generar Orden</Button></div>
                            </div>
                        </div>
                            : <div className="mt-4">El carro esta vácio <br></br><Link to={'/'}>Puedes seguir comprando</Link></div>
                    }
                
            </div>
        </div>
    )
}
export default Cart