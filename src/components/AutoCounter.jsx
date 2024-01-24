import React, { useEffect, useState } from 'react'
import './AutoCounter.css'
function AutoCounter() {
 const [timer,setTimer] = useState(0);

useEffect(()=>{
    const inter = setInterval(()=>{
        setTimer((timer)=>(timer+1))

    },1000)
    return()=>{
        clearInterval(inter)
    }
},[])




 function resetBtn(){
    setTimer(0)
  }
  return (
    <>
    <div >
        <div className="container d-flex align-items-center justify-content-center" style={{padding:"135px"}}>
            
                    <div className="card  d-flex align-items-center justify-content-center " style={{width:"350px", height:"250px"}}>
                        <p className='counter m-2 fw-bold' >{timer}</p>

                    <button className='btn text-white fw-bold ' onClick={resetBtn}>Reset</button>
                    </div>
                </div>
    </div>

    </>
  )
}

export default AutoCounter