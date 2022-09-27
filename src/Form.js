import React, { useState } from 'react';
import './index.css';

const Form = ({ submitFunc, sums, setSums }) => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [choice1, setChoice1] = useState(0);
    const [choice2, setChoice2] = useState(0);
    const [choice3, setChoice3] = useState(0);
    const [choice4, setChoice4] = useState(0);

    const symbols = ["✕", "✓", "(✓)"];

    const changeName = (e) => {
        setName(e.target.value);
    };

    const addToTable = (e) => {
        e.preventDefault();
        const val = [name, choice1, choice2, choice3, choice4];
        submitFunc(val);
        setSubmitted(true);
    }

    const updateChoice = (currChoice, choiceNum) => {
        const newChoice = (currChoice + 1) % 3;
        if (choiceNum === 1) {
            setChoice1(newChoice);
            
            // Update counts
            if (newChoice === 1) {
                const newSums = [sums[0] + 1, sums[1], sums[2], sums[3]];
                setSums(newSums);
            } else if (newChoice === 2) {
                const newSums = [sums[0] - 1, sums[1], sums[2], sums[3]];
                setSums(newSums);
            }
        } else if (choiceNum === 2) {
            setChoice2(newChoice);

            // Update counts
            if (newChoice === 1) {
                const newSums = [sums[0], sums[1] + 1, sums[2], sums[3]];
                setSums(newSums);
            } else if (newChoice === 2) {
                const newSums = [sums[0], sums[1] - 1, sums[2], sums[3]];
                setSums(newSums);
            }
        } else if (choiceNum === 3) {
            setChoice3(newChoice);

            // Update counts
            if (newChoice === 1) {
                const newSums = [sums[0], sums[1], sums[2] + 1, sums[3]];
                setSums(newSums);
            } else if (newChoice === 2) {
                const newSums = [sums[0], sums[1], sums[2] - 1, sums[3]];
                setSums(newSums);
            }
        } else {
            setChoice4(newChoice);

            // Update counts
            if (newChoice === 1) {
                const newSums = [sums[0], sums[1], sums[2], sums[3] + 1];
                setSums(newSums);
            } else if (newChoice === 2) {
                const newSums = [sums[0], sums[1], sums[2], sums[3] - 1];
                setSums(newSums);
            }
        }
    }

    return (
        submitted ?
        <></> :
        <>
            <tr>
                <td><input type="text" value={name} onChange={ changeName } /></td>
                <td><button className={`button btn vote ${choice1 === 0 ? "votedNo" : choice1 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice1, 1)}>{ symbols[choice1] }</button></td>
                <td><button className={`button btn vote ${choice2 === 0 ? "votedNo" : choice2 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice2, 2)}>{ symbols[choice2] }</button></td>
                <td><button className={`button btn vote ${choice3 === 0 ? "votedNo" : choice3 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice3, 3)}>{ symbols[choice3] }</button></td>
                <td><button className={`button btn vote ${choice4 === 0 ? "votedNo" : choice4 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice4, 4)}>{ symbols[choice4] }</button></td>
            </tr>
            <button className='button btn' onClick={ addToTable }>Submit</button>
        </>
    );
}

export default Form;