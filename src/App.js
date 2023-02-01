import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
      { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 0, 30)},
      { id: 'e2', title: 'Kredki', amount: 97.90, date: new Date(2023, 0, 31)},
      { id: 'e3', title: 'Pasta do butów', amount: 1234.67, date: new Date(2023, 1, 1)},
      { id: 'e4', title: 'Maść na ból d', amount: 1500.10, date: new Date(2023, 1, 2)}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <span>To tez widoczne</span>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
