import React from 'react'
import './TryAgain.css'

const TryAgain = ({
    words,
    characters,
    wpm,
    startAgain,
}) =>{
    return(

    <div className="try-again-container">
        <h1>Test Results</h1>
        <div className="result-container">
            <p>
                <b>characters:</b> {characters}
            </p>
            <p>
                <b>words:</b> {words}
            </p>
            <p>
                <b>speed:</b> {wpm} wpm
            </p>
        </div>
        <div>
            <button onClick= {()=> startAgain()} className='end-buttons start-again-btn'>Re-try</button>
            <button
            onClick={()=>{
                window.open("http://www.facebook.com/sharer.php?u=theleanprogrammer.com/aam","facebook-share-dialog","width=800 , height=600")
            }}
            className="end-buttons share-btn"
            >
                share
            </button>

            <button
            onClick={()=>{
                window.open("http://www.twitter.com/intent/tweet?text=theleanprogrammer.com","twitter",
                "height=600 width=800")

            }}
            className="end-buttons tweet-btn"
            >
                tweet
            </button>
        </div>




    </div>
    )
}

export default TryAgain

