import { useState } from 'react';
import ExpenseList from './ExpenseList';
import './Expenses.css'
import Card from './Card.js';
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseChart from './ExpenseChart';


function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2023');

    const changeValueHandler = (changedValue) => {
        setSelectedYear(changedValue);
    }

    const expenses = props.expenses.filter(exp => {
        const year = new Date(exp.date).getFullYear().toString();
        return year === selectedYear;
    });

    
    const clearStorageHandler = e =>{
        localStorage.clear();
        props.onClearExpenses();
    }
    
    return (
        <Card className='expenses'>
            
            <ExpenseFilter selected={selectedYear} onChangeValue={changeValueHandler} />
            <ExpenseChart expenses={expenses} />
            
            <ExpenseList items={expenses} />

            <button className='btn clearBtn' onClick={clearStorageHandler}>Clear Storage</button>
        </Card>
    );
}

export default Expenses;