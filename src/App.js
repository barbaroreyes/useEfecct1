import React,{useState,useEffect} from 'react'
import AlbumDetail from './AlbumDetail'
import './App.css';

function App() {
  const [albums ,setAlbums] = useState([]);
  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
  .then(resp => resp.json())
  .then(setAlbums)
  .catch(err => {
    console.log(err)
  })
  },[]);
  return (
    <div className="App">
      {albums.map((album,i)=> {
         return (<AlbumDetail key={i} album ={album}/>)
      })}
    </div>
  );
}

export default App;
