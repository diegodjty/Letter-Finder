import React from 'react'

const Form = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                      className="col card text-white bg-transparent mb-5 pt-5 pb-2"  
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
                                        />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
