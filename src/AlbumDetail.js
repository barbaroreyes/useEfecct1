import React, {useState,useEffect} from 'react';

function  AlbumDetail({album}) {
  const [photos, setPhotos] = useState([])
const [isTrue, setIsTrue] = useState(false)
useEffect(() =>{
  const albumId = album.id
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  .then(resp => resp.json())
  .then(setPhotos)
  .catch(err => {
    console.log(err)
  })
  },[album.id]);
const handleClick = () => {
  setIsTrue(prevState => prevState = !prevState)
}
let list = null
if(isTrue){
  list = photos.slice(0,10).map(photo => (
    <div>
      <img src={photo.thumbnailUrl} alt="Album"/>
      <p>{photo.title}</p>
    </div>
  ))
}
return (
  <div>
    <h1 onClick ={handleClick}>{album.title}</h1>
    {list}
  </div>)
}

export default AlbumDetail;

    
     
    
