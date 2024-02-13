import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Counter() {
    //state creation
    const [counter,setCounter]=useState(0)
    //function definition
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter > 0){
            setCounter(counter-1)
        }
        else{
            setCounter(0)
        }
    }
    function reset(){
        setCounter(0)
    }
  return (
    <div id='count'>

        <Row>
            <Col> 
            <img width={'500px'} src="https://images.unsplash.com/photo-1704265586142-db3e17d0dea0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcHdhdGNoJTIwc2Vjb25kc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </Col>
            <Col>
            <h1 style={{color:'white'}} >{counter}</h1>
        <button id='btn1' onClick={increment}>Increment</button>
        <button id='btn3' onClick={reset}>Reset</button>
        <button id='btn2' onClick={decrement}>Decrement</button>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default Counter