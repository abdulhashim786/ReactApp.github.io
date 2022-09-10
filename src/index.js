import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Name from './Name';
import sdata from './Datas'
import Datas from './Datas'


//const img1='https://picsum.photos/200/300?grayscale';
//const img2='https://picsum.photos/200/300?grayscale';
//const img3='https://picsum.photos/200/300?grayscale';

//const link='https://picsum.photos/';
/*
const css={
  
    textAlign: 'center',
    aligntems: 'center',
    justifyContent: 'center',
    margin: '40px 30px',
    backgroundColor:'yellow'
  
}*/
/*
 const cards=(val)=>{
 //  let   key=val.id;
 console.log(val);
    return(
       <>
       
       <Name  src={val.src }
        name={val.name}
        price={val.price}
        href={val.href} />

        </>
    )
 }*/


 ReactDOM.render(<> 
 <div className='header_top'>
    <h1>This Is Web Series</h1>
    </div>
 

  
  {sdata.map((val,index)=>{
      console.log(val.id)
      return(
       <>
       
       <Name  
       key={val.id}
       src={val.src }
        name={val.name}
        price={val.price}
        href={val.href} />

        </>
    )
  }) 
  }
 


 </>,document.getElementById('root')
)





