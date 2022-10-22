export default function Hello(){
            
    function showName(){
        console.log("Mikle")
    }
    function showAge(age){
        console.log(age)
    }
    function showText(txt){
        console.log(txt)
    }

    return(

    <div>
        <h1
        >
        Hello 
        </h1>
         <button onClick={showName}>show name</button>
         <button 
            onClick={()=>{
                showAge(30)
            }}
            >
                show age
                </button>
        <input type="text" onChange={(e)=>{
            const txt = e.target.value
            showText(txt)
        }}></input>
    </div>
    )
}