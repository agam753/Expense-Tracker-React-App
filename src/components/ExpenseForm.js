import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [titleVal, setTitleVal] = useState('');
    const [amountVal, setAmountVal] = useState('');
    const [dateVal, setDateVal] = useState('');
    const TitleHandler = (e) =>{
        setTitleVal(e.target.value);
    }
    const AmountHandler = (e) =>{
        setAmountVal(e.target.value);
    }
    const DateHandler = (e) =>{
        setDateVal(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const inputData = {
            title: titleVal,
            amount: +amountVal,
            date: new Date(dateVal),
        }
        props.onSubmitData(inputData);
        setAmountVal('');
        setDateVal('');
        setTitleVal('');
        setRenderForm(renderForm=>!renderForm)
    }
    const [renderForm, setRenderForm] = useState(false);

    const cancelClickHandler = (e) =>{
        setRenderForm(false);
    }
    
    const newExpenseClickHandler = e =>{
        setRenderForm(true);
    }

    if(renderForm){
        return <form className='expense-form' onSubmit={submitHandler}>
        <div className="expense-detail">
            <div className="expense-detail__input">
                <label>Title</label>
                <input type='text' placeholder='Title' onChange={TitleHandler} value={titleVal}/>
            </div>
            <div className="expense-detail__input date">
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2024-11-01' onChange={DateHandler}
                value={dateVal}
                 />
            </div>
            <div className="expense-detail__input">
                <label>Amount</label>
                <input type='text' placeholder='Amount' onChange={AmountHandler}
                value={amountVal} />
            </div>
        </div>
        <div className="expense-submit">
            <button onClick={cancelClickHandler} className='btn'>Cancel</button>
            <button type="submit" className='btn'>Add Expense</button>
        </div>
    </form>
    }
    return (
        <div className='newExpense-btn-box'>
            <button onClick={newExpenseClickHandler} className='newExpense-btn btn'>Add New Expense</button>
        </div>
    )
}

export default ExpenseForm;