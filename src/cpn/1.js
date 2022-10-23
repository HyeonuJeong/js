import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}){
    
    // var name ="mike"
    const [name, setName]=useState('mike')
    const msg = age>19?"성인":"학생"

    return(

    <div>

        <h2 id="name">{name}({age}:{msg})</h2>
        
        <UserName name = {name}/>

        <button onClick={()=>{
        setName(name==="mike"?"jane":"mike")
        
        }}>change</button>

      
    </div>
    )
}