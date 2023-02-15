import './ExpenseDate.css'

function ExpenseDate(props) {
    const day = new Date(props.date).toLocaleString('en-IN', { day: 'numeric' });
    const month = new Date(props.date).toLocaleString('en-IN', { month: 'long' });
    const year = new Date(props.date).getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;