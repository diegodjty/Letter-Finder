import React,{Fragment, useState,useEffect} from 'react';
import Form from './components/Form';

import axios from 'axios';



function App() {

  const [lyricsSearch,setLyricsSearch] = useState({})
  const [lyrics, setLyrics] = useState('');

    useEffect(()=>{
        if(Object.keys(lyricsSearch).length === 0 ) return;    

        const {artist, song} = lyricsSearch;

        const consultLyricsAPI = async () => {
          const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

          const response = await axios.get(url)
          setLyrics(response.data.lyrics)
        }

        consultLyricsAPI()
    },[lyricsSearch])
  return (
    <Fragment>
      <Form
        setLyricsSearch={setLyricsSearch}
      />
    </Fragment>
  );
}

export default App;
