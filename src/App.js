import React from "react";
import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2019, 11, 17),
      title: 'Car',
      amount: 500000
    },
    {
      id: 'e2',
      date: new Date(2020, 1, 2),
      title: 'Table',
      amount: 5000
    },
    {
      id: 'e3',
      date: new Date(2021, 8, 20),
      title: 'Chair',
      amount: 2000
    },
    {
      id: 'e4',
      date: new Date(2020, 5, 13),
      title: 'TV',
      amount: 13000
    },]
  return (
    <div >
      <h1>Expense Tracker!!!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
