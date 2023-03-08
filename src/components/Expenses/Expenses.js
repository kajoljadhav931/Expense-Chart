import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2019);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log('Expenses.js');
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  
  return (
    <div>


      <Card className="expenses">
        <ExpenseFilter selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : ( */}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date} />
          ))}  */}

          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />


        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date} />


        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date} />



        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date} />


        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date} />
 */}


      </Card>
    </div>
  );
};

export default Expenses;