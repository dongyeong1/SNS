import React ,{useCallback,useState}from 'react'
import ImagesZoom from './ImagesZoom'

function  PostImages({images}) {

const [showImagesZoom,setShowImagesZoom]=useState(false)

const onZoom= useCallback(()=>{
  setShowImagesZoom(true)
},[])

const onClose=useCallback(()=>{
  setShowImagesZoom(false)
},[])

  if(images.length===1){

  
  return (
   <>
   <img role="presentation"  src={images[0].src} alt={images[0].src} onClick={onZoom}></img>
   {showImagesZoom && <ImagesZoom images={images} onClose={onClose}  />}
   </>
  )
  
}

if(images.length===2){
  return(
    <>
   <img role="presentation" style={{width:'50%'}} src={images[0].src} alt={images[0].src} onClick={onZoom}></img>
   <img role="presentation" style={{width:'50%'}}src={images[1].src} alt={images[1].src} onClick={onZoom}></img>
   {showImagesZoom && <ImagesZoom images={images} onClose={onClose}  />}

   </>
  )
}
}

export default  PostImages