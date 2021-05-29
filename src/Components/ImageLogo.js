import React from 'react'
const ImageLogo=(props)=>{
return (
    <div className='imgLogo'>
     <img  id='image' src={props.imglogo} alt='' width='500px' height='500px'></img>   
    
     <div className='bounding_box' style={{top:props.box.topRow, right:props.box.rightCol, bottom:props.box.bottomRow,left:props.box.leftCol}}></div>
    </div>
)
}
export default ImageLogo