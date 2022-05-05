import './App.css';
import MyClock from "./components/clock";
import List from './components/list';

let items = [
  {label: "apple", value: 1},
  {label: "banana", value: 2},
  {label: "orange", value: 3},
  {label: "watermelon", value: 4}
]

function App() {
  return (
    <div className="App">
      <MyClock />
      <List items={items}></List>
    </div>
  );
}

export default App;
