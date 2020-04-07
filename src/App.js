import React,{Fragment, useState,useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Artist from './components/Artist';
import Error from './components/Error';

import axios from 'axios';





function App() {

  const [lyricsSearch,setLyricsSearch] = useState({})
  const [lyrics, setLyrics] = useState('');
  const [artistInfo, setArtistInfo] = useState([]);

    useEffect(()=>{
        if(Object.keys(lyricsSearch).length === 0 ) return;    

        const {artist, song} = lyricsSearch;

        const consultLyricsAPI = async () => {
          const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
          const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`

          const [lyrics, info] = await Promise.all([
            axios(url),
            axios(url2)
          ])
          setLyrics(lyrics.data.lyrics)
          if(info.data.artists){
            setArtistInfo(info.data.artists[0])
          }
        }
        consultLyricsAPI()
    },[lyricsSearch,artistInfo])

    const verifyArtist = () =>{
      if(lyrics && artistInfo.length !== 0 ){
        const component = <Artist artistInfo={artistInfo} />
        return component
      }else if(lyrics && artistInfo.length === 0){
        const component = <Error message="Artist info not found" />
        return component
      }
    }  
    
  return (
    <Fragment>
      <Form
        setLyricsSearch={setLyricsSearch}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {verifyArtist()}
          </div>
          <div className="col-md-6">
            <Song 
              lyrics={lyrics}
            /> 
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
