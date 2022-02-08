import { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css'

function Expenses({ expenses }) {

    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChnage={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;