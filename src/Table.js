import React, { useState } from 'react';
import Form from './Form';
import './index.css';

const Table = () => {
    const defaultData = [
        ["Anna", 1, 2, 1, 1],
        ["Jafar", 0, 2, 1, 0],
        ["Snow", 1, 1, 0, 0]
    ];

    const symbols = ["✕", "✓", "(✓)"];

    const [tableData, setTableData] = useState(defaultData);

    const tableRows = tableData.map((entry) => {
        return (
            <tr>
                <td>{entry[0]}</td>
                <td>{symbols[entry[1]]}</td>
                <td>{symbols[entry[2]]}</td>
                <td>{symbols[entry[3]]}</td>
                <td>{symbols[entry[4]]}</td>
            </tr>
        )
    });

    const addRow = (newRow) => {
        const updatedData = [...tableData];
        updatedData.push(newRow);
        setTableData(updatedData);
    }

    return (
        <table id="pollTable">
            <thead>
                <tr>
                    <td></td>
                    <td class="optionLabel">Dec 1, 3-4pm</td>
                    <td class="optionLabel">Dec 1, 4-5pm</td>
                    <td class="optionLabel">Dec 2, 3-4pm</td>
                    <td class="optionLabel">Dec 2, 4-5pm</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>{ tableRows }</tbody>
            <Form submitFunc={ addRow } />
        </table>
    );
};
  
export default Table;