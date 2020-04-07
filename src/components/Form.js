import React,{useState} from 'react'

const Form = () => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

    const [error,setError] = useState(false);

    const {artist,song} = search;
    const updateState = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const lookInformation = e =>{
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                      className="col card text-white bg-transparent mb-5 pt-5 pb-2"  
                      onSubmit={lookInformation}
                    >
                        <fieldset>
                            <legend className="text-center">Songs letter finder</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artist</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Name of the artist"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Song</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Name of the song"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
