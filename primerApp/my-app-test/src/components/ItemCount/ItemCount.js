import React, { useState } from 'react'
import { Button } from 'reactstrap';

const ItemCount = (props) => {
const [count, setCount] = useState(props.initial);
const  { parentCallback } = props

const increment = () => {
    if(props.stock !== count){
        setCount(count + 1)
    }
}
const decrement = () => {
    if (count !== 1) {
        setCount(count - 1)
    }
}
const onAdd = ()=>{
    parentCallback(count);
}

return (
    <div className='my-2 row'>
        <div className='d-flex justify-content-center col'>
            <Button onClick={decrement} children={'-'}/>
            <div className='mx-2'>{count}</div>
            <Button onClick={increment} children={'+'}/>
        </div>
        <div className='col'>
            <Button className='mt-2 btn btn-outline-success' onClick={onAdd} outline>Agregar al Carro</Button>
        </div>
    </div>
  )
}
export default ItemCount