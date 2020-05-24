import React from 'react'
import Result from './Result'
import { MDBRow } from 'mdbreact'

function Results({ results, openPopup }) {
    return (
        <MDBRow>
            {results.map(result =>(
                <Result key={result.imdbID} result={result} openPopup={() => openPopup(result.imdbID)}/>
            ))}  
        </MDBRow>
    )
}

export default Results
