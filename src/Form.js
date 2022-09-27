import React, { useState } from 'react';
import './styles.css';

// Define Form component, which takes in user name and availability votes
const Form = ({ submitFunc, sums, setSums }) => {
    // Create name, submission status, and votes for each choice as state variables
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [choice1, setChoice1] = useState(0);
    const [choice2, setChoice2] = useState(0);
    const [choice3, setChoice3] = useState(0);
    const [choice4, setChoice4] = useState(0);

    // Define symbols that correspond to numerical votes
    const symbols = ["✕", "✓", "(✓)"];

    // When the user types in their name to the input text box, 
    // update name variable by calling setName
    const changeName = (e) => {
        setName(e.target.value);
    };

    // When the user clicks "Submit", add their choices as a row in the table
    const addToTable = (e) => {
        e.preventDefault();
        // Combine the user's name and votes into an array, which will be one row in the table
        const val = [name, choice1, choice2, choice3, choice4];
        // submitFunc is defined in Table.js and will append val to the tableRows
        submitFunc(val);
        // Set the submitted boolean to true in order to hide the input form
        setSubmitted(true);
    }

    // When a user clicks on one of the voting slots, reflect this vote on the interface
    // and update this choice in the choice1...choice4 variables
    const updateChoice = (currChoice, choiceNum) => {
        // Define the new choice
        // Since each vote button should have three states, toggle through values 0, 1, and 2
        const newChoice = (currChoice + 1) % 3;

        // choiceNum refers to which timeslot's vote was adjusted
        if (choiceNum === 1) {
            // Update the choice
            setChoice1(newChoice);
            
            // Update counts
            if (newChoice === 1) {
                // If newChoice is 1 then the user voted for this timeslot, so we increase 
                // the tally of available users for this time slot
                const newSums = [sums[0] + 1, sums[1], sums[2], sums[3]];
                // Update sums using setSums, which is passed into the component from Table
                setSums(newSums);
            } else if (newChoice === 2) {
                // If newChoice is 2 then the user had previously voted Yes and is now changing
                // their vote to If Need Be
                // Update sums by subtracting their previous Yes vote
                const newSums = [sums[0] - 1, sums[1], sums[2], sums[3]];
                setSums(newSums);
            }
        // The same logic is applied for votes cast for the other three time slots
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
        // When submitted is true, hide the input form.
        submitted ?
        <></> :
        <>
            <tr>
                {/* Input text field for user to input their name */}
                <td><input type="text" value={name} onChange={ changeName } /></td>
                {/* Buttons for user to indicate their availability for each of the four time slots */}
                <td><button className={`btn vote ${choice1 === 0 ? "votedNo" : choice1 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice1, 1)}>{ symbols[choice1] }</button></td>
                <td><button className={`btn vote ${choice2 === 0 ? "votedNo" : choice2 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice2, 2)}>{ symbols[choice2] }</button></td>
                <td><button className={`btn vote ${choice3 === 0 ? "votedNo" : choice3 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice3, 3)}>{ symbols[choice3] }</button></td>
                <td><button className={`btn vote ${choice4 === 0 ? "votedNo" : choice4 === 1 ? "votedYes" : "votedNeedBe" }`} onClick={() => updateChoice(choice4, 4)}>{ symbols[choice4] }</button></td>
                {/* Submission button that adds their votes to the table */}
                <td><button className='button btn' onClick={ addToTable }>Submit</button></td>
            </tr>
        </>
    );
}

// Export the Form component so it can be imported and displayed by Table component
export default Form;