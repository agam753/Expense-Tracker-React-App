import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){
    const submitDataHandler = (expenseData) =>{
        const expense = {
            ...expenseData,
            id: Math.trunc(Math.random()*213).toString()
        }
        props.onAddExpense(expense);
    }
    return <div className="new-expense">
        <ExpenseForm onSubmitData={submitDataHandler} />
    </div>
}

export default NewExpense;