
import Expenses from "./components/Expenses";

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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
