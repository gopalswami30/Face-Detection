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
const [pos,setPos]=useState([{}]);
// useEffect(() => {
//   // action on update of movies
// }, [pos]);
const app = new Clarifai.App({
 apiKey:'Your API key'
});
const calFaceLoc=(data)=>{
  console.log(data);
 const clfa=data.outputs[0].data.regions[0].region_info.bounding_box;
  const len=data.outputs[0].data.regions.length;
 
  const arr=data.outputs[0].data.regions;
  setPos(arr);
  // for(var i=0;i<len;i++){
  //   setPos((prev)=>{
  //     console.log(prev);
  //     const d=data.outputs[0].data.regions[i].region_info.bounding_box;
  //     return [...prev,{
  //       leftCol:d.left_col*width,
  //       topRow:d.top_row*height,
  //       rightCol:width-d.right_col*width,
  //       bottomRow:height-d.bottom_row*height
  //     }]
  //   })
  // }
  // console.log(pos);

//  return {
//    leftCol:clfa.left_col*width,
//    topRow:clfa.top_row*height,
//    rightCol:width-clfa.right_col*width,
//    bottomRow:height-clfa.bottom_row*height
//  }
}
  const onInputChange=(event)=>{
    setImgUrl(event.target.value);
  
  
  }
  const onsub=()=>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL,imgUrl)
    .then(response=>calFaceLoc(response))
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
