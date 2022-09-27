import React, { useState } from 'react';
import Form from './Form';
import './index.css';

const Table = () => {
    const symbols = ["✕", "✓", "(✓)"];

    const defaultData = [
        ["Anna", 1, 2, 1, 1],
        ["Jafar", 0, 2, 1, 0],
        ["Snow", 1, 1, 0, 0]
    ];

    const [tableData, setTableData] = useState(defaultData);

    const [sums, setSums] = useState([2, 1, 2, 1]);

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
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td className="optionLabel">Dec 1, 3-4pm</td>
                    <td className="optionLabel">Dec 1, 4-5pm</td>
                    <td className="optionLabel">Dec 2, 3-4pm</td>
                    <td className="optionLabel">Dec 2, 4-5pm</td>
                </tr>
            </thead>
            <tbody>{ tableRows }</tbody>
            <Form submitFunc={ addRow } sums={ sums } setSums={ setSums } />
            <tfoot>
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