import React, { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

//const App = () => {
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 1, 23)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 200.67,
    date: new Date(2022, 5, 17)
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 150.67,
    date: new Date(2020, 9, 17)
  },
  {
    id: 'e4',
    title: 'Books',
    amount: 100.67,
    date: new Date(2019, 12, 12)
  },

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    // console.log('In App.js');
    // console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
