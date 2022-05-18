import React, { useState } from 'react'
import { Button } from 'reactstrap';

const ItemCount = (props) => {
const [count, setCount] = useState(props.initial);
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
  return (
    <div className='d-flex justify-content-center my-2'>
        <Button onClick={decrement} children={'-'}/>
        <div className='mx-2'>{count}</div>
        <Button onClick={increment} children={'+'}/>
    </div>
  )
}
export default ItemCount