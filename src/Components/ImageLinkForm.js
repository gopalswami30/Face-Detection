import React from 'react'

const ImageLinkForm=(props)=>{
    return (
       < >    
           <div className='form'>  
               <input  type='text' onChange={props.onInpChg}/>
                 <button onClick={props.onSubmit}>Detect</button>       
           </div>
       </>
    )
}
export default ImageLinkForm;