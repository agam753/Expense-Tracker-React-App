import './ExpenseFilter.css';

function ExpenseFilter(props) {
    const optionChangeHandler = (e) =>{
        props.onChangeValue(e.target.value);
    }
    return (
        <div className="expense-filter">
            <label className='filter-label'>Filter by year</label>
            <select className='filter-select' value={props.selected} onChange={optionChangeHandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;