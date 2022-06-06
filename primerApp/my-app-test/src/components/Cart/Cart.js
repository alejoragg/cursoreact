import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Button } from 'reactstrap'
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext)
    console.log(cart)
    return(
        <div className="text-center mt-4">
            <h1>Carrito</h1>
            <div className="col-10 mx-auto">
                {cart.map(prod=> {
                    return(
                        <div key={prod.id} className="row my-2 outline">
                            <div className="col"><Link to={'/detail/'+prod.id}>Nombre: {prod.name}</Link></div>
                            <div className="col">Cantidad: {prod.quantity}</div>
                            <div className="col">Precio: {prod.price}</div>
                            <div className="col">Subtotal: {prod.price * prod.quantity}</div>
                            <div className="col">
                                <Button className="btn btn-danger" onClick={()=>removeItem(prod.id)}>X</Button>
                            </div>
                        </div>
                    )
                })}
                {cart.length > 0 ? <div><Button onClick={()=>clearCart()} className="btn btn-outline-danger" outline>Limpiar Carro</Button></div> : null}
            </div>
        </div>
    )
}
export default Cart