import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card';

function ExpenseItem(props) {

    // console.log('React evaluated ExpenseItem');
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">Rs. {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;