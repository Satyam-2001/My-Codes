import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const dummyExpenses = [
    { id:'1', title: "Car Insurance", amount: 100, date: new Date(2022, 1, 1) },
    { id:'2', title: "Television", amount: 100, date: new Date(2019, 1, 2) },
    { id:'3', title: "Blanket", amount: 100, date: new Date(2020, 1, 12) },
    { id:'4', title: "Fruits", amount: 100, date: new Date(2022, 1, 2) }
  ]

  const [expenses,setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense , ...prevExpenses])
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;