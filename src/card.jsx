import React, { useState } from 'react';
import './card.css';

const Card = () => {
    const [count, setCount] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    
    const dict = [
        { question: "How many legs does an Octopus have?", answer: "8" },
        { question: "How many legs does a Horse have?", answer: "4" },
        { question: "How many legs does a Human have?", answer: "2" },
        { question: "How many legs does a 3-legged stool have?", answer: "3" },
        { question: "How many legs does an Insect have?", answer: "6" },
    ];

    const updateCount = () => {
        setCount((prevCount) => (prevCount + 1) % dict.length);
        setIsFlipped(false);
        setUserGuess('');
        setFeedback('');
    };

    const minus = () => {
        setCount((prevCount) => (prevCount - 1 + dict.length) % dict.length);
        setIsFlipped(false);
        setUserGuess('');
        setFeedback('');
    };

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleGuessChange = (e) => {
        setUserGuess(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswer = dict[count].answer;

        if (userGuess.trim() === correctAnswer) {
            setFeedback('Correct!');
        } else {
            setFeedback(`Incorrect! The correct answer is ${correctAnswer}.`);
        }
        setIsFlipped(true); // Show the answer after submitting
    };

    return (
        <div>
            <h1>Legs Trivia</h1>
            <h2>Total cards: {dict.length}</h2>
            <div className='index' onClick={toggleFlip}>
                {!isFlipped ? dict[count].question : dict[count].answer}
            </div>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Answer </label>
                <input type="text" value={userGuess} onChange={handleGuessChange} />
                <button className="submit"type="submit">Submit</button>


            </form>
            {feedback && <div className="feedback">{feedback}</div>}

            </div>
           

            

            <div className="navigation">
            <a href="#" className="previous round" onClick={minus}>&#8249;</a>
            <a href="#" className="next round" onClick={updateCount}>&#8250;</a>
            </div>

            
        </div>
    );
};

export default Card;
