import React from "react";



function Name(props)
 {


// const link='https://picsum.photos/';


return(
   <>
   
    <div className="cards">
    <div className="card">
    
    <img src={props.src} />
 
    
    <div className="card_info">
    <a href={props.href}>
    <button type="submit" className="btn btn-primary" >
     {props.name} 
     </button>
     </a>
     <div>
    {props.price}
    </div>
    </div>
    </div>
    </div>
   </>
)
    
 }

export default Name;