import React from 'react'

const Artist = ({artistInfo}) => {
    if(Object.keys(artistInfo).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyEN} = artistInfo;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist info
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist Logo"/>
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text"> Biography: </h2>
                <p className="card-text">{strBiographyEN}</p> 
            </div>
        </div>
    )
}

export default Artist
