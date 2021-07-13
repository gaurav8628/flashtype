import React from 'react'
import './TypingChallenge.css'
import TestLetter from '../TestLetter/TestLetter'

const TypingChallenge = ({
    selectedParagraph,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) =>{
    // console.log("inside typinghallenge",{testInfo})
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {timeRemaining>=10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">
                    {!timerStarted && "Start Typing To start The Test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}

                        {
                            testInfo.map((individualLetterInfo,index)=>{
                                // return <div>{individualLetterInfo.testLetter}</div>
                                return <TestLetter key={index} individualLetterInfo={individualLetterInfo}/>
                            })
                        }

                    </div>
                </div>
                <div className="textarea-right">
                     <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea"
                        placeholder="Start typing here"
                     >
                     </textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge