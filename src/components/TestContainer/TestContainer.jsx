import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

const TestContainer = (
    {
        selectedParagraph,
        words,
        characters,
        wpm,
        timeRemaining,
        timerStarted,
        testInfo,
        onInputChange,
        startAgain,
    }
) =>{

    // const timeRemaining = 10; 
    return (

        <div className="test-container">

            {
                timeRemaining>0 ?(

                    <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer 
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    selectedParagraph={selectedParagraph}
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    />
                    </div>

                ) :
                (


                    <div className="try-again-container">
                    <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                    </div> 

                )
            }


            {/* <div className="try-again-container">
                <TryAgain words={words} characters={characters} wpm={wpm}/>
            </div> */}
            {/* <div data-aos="fade-up" className="typing-challenge-container">
                   <TypingChallengeContainer words={words} characters={characters} wpm={wpm}/>
            </div> */}
        </div>


    );

}

export default TestContainer