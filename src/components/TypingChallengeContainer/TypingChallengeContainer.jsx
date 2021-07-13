import React from 'react'
import './TypingChallengeContainer.css'
import ChalangeDetailsCard from '../ChallengeDetailsCard/ChallangeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'

const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) =>{
    return(
        <div className="typing-challeneg-container">
            {/* deatils section */}
            <div className="detail-container">
                {/* words typed */}
                <ChalangeDetailsCard cardName="words" cardValue={words}/>
                

                {/* characters typed */}
               
                <ChalangeDetailsCard cardName="characters" cardValue={characters}/>

                {/* speed */}
                
                <ChalangeDetailsCard cardName="speed" cardValue={wpm}/>

            </div>
            {/* the real challenge */}
            <div className="typewriter-container">
            <TypingChallenge
            timerStarted={timerStarted}
            timeRemaining={timeRemaining} 
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange}
            />
            </div>
        </div>
    )
}


export default  TypingChallengeContainer