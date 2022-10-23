import { useState } from "react";

export default function Hello(){
            
    // var name ="mike"
    const [name, setName]=useState('mike')


    return(

    <div>

        <h2 id="name">{name}</h2>
        <button onClick={()=>{
        setName(name==="mike"?"jane":"mike")
        }}>change</button>

      
    </div>
    )
}