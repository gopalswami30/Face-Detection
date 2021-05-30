import React from 'react'
const ImageLogo=(props)=>{
   const npcall=(curelement)=>{
       console.log(curelement);
      
       const width=500;
       const height=500
       if(curelement.region_info!==undefined){
        const leftCol=curelement.region_info.bounding_box.left_col*width;
       const  topRow=curelement.region_info.bounding_box.top_row*height;
     const rightCol=width-curelement.region_info.bounding_box.right_col*width;
      const  bottomRow=height-curelement.region_info.bounding_box.bottom_row*height
     return (<div className='bounding_box' style={{top:topRow, right:rightCol, bottom:bottomRow,left:leftCol}}></div>)
       } }
return (
    <div className='imgLogo'>
     <img  id='image' src={props.imglogo} alt='' width='500px' height='500px'></img>   
    {props.box.map(npcall)}
      </div>
)
}
export default ImageLogo