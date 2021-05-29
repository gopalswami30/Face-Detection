import React, { useState } from 'react'
import Navigation from './Components/Navigation'
import Logo from './Components/Logo'
import Rank from './Components/Rank'
import ImageLinkForm from './Components/ImageLinkForm'
import ImageLogo from './Components/ImageLogo'
import Clarifai from 'clarifai'
import 'tachyons'
function App() {
const [imgUrl,setImgUrl]=useState('');
const [pos,setPos]=useState({});
const app = new Clarifai.App({
 apiKey:'889edde3999249ff89f512fc8e4dbf81'
});
const calFaceLoc=(data)=>{
  console.log(data);
 const clfa=data.outputs[0].data.regions[0].region_info.bounding_box;
 const image=document.getElementById('image');
 const width=Number(image.width);
 const height=Number(image.height)
 return {
   leftCol:clfa.left_col*width,
   topRow:clfa.top_row*height,
   rightCol:width-clfa.right_col*width,
   bottomRow:height-clfa.bottom_row*height
 }
}
  const onInputChange=(event)=>{
    setImgUrl(event.target.value);
  
  
  }
  const onsub=()=>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL,"https://samples.clarifai.com/face-det.jpg")
    .then(response=>setPos(calFaceLoc(response)))
    .catch(err=>{
      console.log(err)
    })
  }
  return (
   <div> 
  <Navigation></Navigation>
  <Logo></Logo> 
  <ImageLinkForm onInpChg={onInputChange} onSubmit={onsub}></ImageLinkForm>
  {/* <Rank></Rank> */}
  
  <ImageLogo box={pos} imglogo={imgUrl}></ImageLogo>
  </div>
  );
}

export default App;
