import {useEffect, useRef, useState} from 'react'



function Frag(){
  const [tekst, setTekst]=useState(false);
  const reference=useRef(0);
  
  useEffect((e) => {
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