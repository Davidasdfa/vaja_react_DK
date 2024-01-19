import {useState} from 'react'



function Nekaj(){
  const [tekst, setTekst]=useState(true);
  const tekst1="nekaj 1"
  const tekst2="nekaj 2"

  return(
    <>
    <div id = 'neke'>Text v nekaj funkciji</div>
    <p>nekaj novega daciaaa</p>
    <button onClick={(e)=>{setTekst(!tekst)}}>klikni me</button>
    <span>{tekst? tekst1 : tekst2}</span>
    </>
  );

}

export default Nekaj;