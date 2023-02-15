import NewExpense from './components/NewExpense.js';
import Expenses from './components/Expenses.js';
import { useState } from 'react';


const dummy_expenses = [
  {
    id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28),
  },
  {
    id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2022, 5, 12),
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const data = JSON.parse(localStorage.getItem('expenses'));
  // console.log(data);

  if(data && data.length > expenses.length){
    setExpenses(data);
  }
  
  const addExpenseHandler = expense => {
    setExpenses(prvExpenses => {
      const newExpenses = [expense, ...prvExpenses]
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      return newExpenses;
    });
  }

  const clearExpenseHandler = () => {
    setExpenses(dummy_expenses);
  }

  return (
    <div className="expense-items">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onClearExpenses={clearExpenseHandler} />
    </div>
  );
}

export default App;
