import React, { useState } from 'react';
import './index.css';

const Form = ({ submitFunc }) => {
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
            console.log("hi");
        } else if (choiceNum === 2) {
            setChoice2(newChoice);
        } else if (choiceNum === 3) {
            setChoice3(newChoice);
        } else {
            setChoice4(newChoice);
        }
    }

    return (
        submitted ?
        <></> :
        <div className="App">
            <tr>
                <td><input type="text" value={name} onChange={ changeName } /></td>
                <td><button onClick={() => updateChoice(choice1, 1)}>{ symbols[choice1] }</button></td>
                <td><button onClick={() => updateChoice(choice2, 2)}>{ symbols[choice2] }</button></td>
                <td><button onClick={() => updateChoice(choice3, 3)}>{ symbols[choice3] }</button></td>
                <td><button onClick={() => updateChoice(choice4, 4)}>{ symbols[choice4] }</button></td>
            </tr>
            <button className='btn' onClick={ addToTable }>Submit</button>
        </div>
    );
}

export default Form;