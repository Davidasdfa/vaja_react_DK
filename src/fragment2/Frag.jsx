import {useEffect, useRef, useState} from 'react'



function Frag(){
  const [tekst, setTekst]=useState("");
  const reference=useRef(0);
  
  useEffect((e) => {
    fetch("http://127.0.0.1:5000/books").then(y=>y.json()).then(x=>(setTekst(x))).catch(e=>{console.log(e)})
  }, [tekst])

  return (
    <>
        <div>
            <input type={"tekst"} ref={reference} value={reference.current.value}/>
            <button onClick ={(e)=>{console.log(reference.current.value) }}>klikni</button>
        </div>
    </>
    
  )

}

export default Frag;