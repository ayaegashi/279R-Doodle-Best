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
                <td className='person'>{entry[0]}</td>
                <td className={`vote ${entry[1] === 0 ? "votedNo" : entry[1] === 1 ? "votedYes" : "votedNeedBe" }`} >{symbols[entry[1]]}</td>
                <td className={`vote ${entry[2] === 0 ? "votedNo" : entry[2] === 1 ? "votedYes" : "votedNeedBe" }`}>{symbols[entry[2]]}</td>
                <td className={`vote ${entry[3] === 0 ? "votedNo" : entry[3] === 1 ? "votedYes" : "votedNeedBe" }`}>{symbols[entry[3]]}</td>
                <td className={`vote ${entry[4] === 0 ? "votedNo" : entry[4] === 1 ? "votedYes" : "votedNeedBe" }`}>{symbols[entry[4]]}</td>
            </tr>
        )
    });

    const addRow = (newRow) => {
        const updatedData = [...tableData];
        updatedData.push(newRow);
        setTableData(updatedData);
    }

    return (
        <table className='pollTable'>
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