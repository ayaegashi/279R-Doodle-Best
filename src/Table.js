import React, { useState } from 'react';
import Form from './Form';
import './styles.css';

// Create Table component. This includes the 
const Table = () => {
    // Define the list of symbols that users can vote with.
    const symbols = ["✕", "✓", "(✓)"];

    // Default sample data displayed
    // {0: "✕"}, {1: "✓"}, {2: "(✓)"}
    const defaultData = [
        ["Anna", 1, 2, 1, 1],
        ["Jafar", 0, 2, 1, 0],
        ["Belle", 1, 1, 0, 0]
    ];

    // The useState hook allows you to create a state within a component
    // When setTableData is called, this updates the value stored in tableData and refreshes the component
    // tableData stores the rows of the availability table
    const [tableData, setTableData] = useState(defaultData);

    // sums stores the number of people who are available for any given timeslot
    const [sums, setSums] = useState([2, 1, 2, 1]);

    // This function returns one table row for each row in tableData
    const tableRows = tableData.map((entry) => {
        return (
            <tr>
                <td className='person'>{entry[0]}</td>
                {/* Style user input according to whether they have voted Yes, No, or If Need Be; classes defined in styles.css */}
                <td className={`vote ${entry[1] === 0 ? "votedNo" : entry[1] === 1 ? "votedYes" : "votedNeedBe" }`} >{symbols[entry[1]]}</td>
                <td className={`vote ${entry[2] === 0 ? "votedNo" : entry[2] === 1 ? "votedYes" : "votedNeedBe" }`}>{symbols[entry[2]]}</td>
                <td className={`vote ${entry[3] === 0 ? "votedNo" : entry[3] === 1 ? "votedYes" : "votedNeedBe" }`}>{symbols[entry[3]]}</td>
                <td className={`vote ${entry[4] === 0 ? "votedNo" : entry[4] === 1 ? "votedYes" : "votedNeedBe" }`}>{symbols[entry[4]]}</td>
            </tr>
        )
    });

    // This function adds the user's input as a row in the table
    const addRow = (newRow) => {
        // Cannot directly do setTableData(updatedData.push(newRow))
        // Instead, create a new variable to store the updated tableData
        const updatedData = [...tableData];
        // Append the newRow with user information to the array
        updatedData.push(newRow);
        // Update the array stored in tableData
        setTableData(updatedData);
    }

    return (
        // Create a table
        <table className='pollTable'>
            <caption><h3>Select your prefereed times.</h3></caption>
            <thead>
                <tr>
                    {/* Display timeslot choices */}
                    <td></td>
                    <td className="optionLabel">Dec 1, 3-4pm</td>
                    <td className="optionLabel">Dec 1, 4-6pm</td>
                    <td className="optionLabel">Dec 3, 1-4pm</td>
                    <td className="optionLabel">Dec 4, 4-5pm</td>
                </tr>
            </thead>
            {/* Display previous users' input; tableRows are defined above for concision */}
            <tbody>{ tableRows }</tbody>
            {/* Display Form component defined in Form.js, which takes care of current user's input */}
            {/* Pass in the addRow function as well as sums and setSums, all of which need to be accessible to the Form */}
            <Form submitFunc={ addRow } sums={ sums } setSums={ setSums } />
            <tfoot>
                {/* Display the number of people available for each time slot */}
                {/* Updates in realtime since we pass sums and setSums to the Form component */}
                <tr>
                    <td></td>
                    <td className="optionLabel">{ sums[0] }</td>
                    <td className="optionLabel">{ sums[1] }</td>
                    <td className="optionLabel">{ sums[2] }</td>
                    <td className="optionLabel">{ sums[3] }</td>
                </tr>
            </tfoot>
        </table>
    );
};
  
export default Table;