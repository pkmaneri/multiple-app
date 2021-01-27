
import './App.css';
import Sum from './component/Sum';
import Todo from './component/Todo';
import EmployeeDirectory from "./component/EmployeeDirectory";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Sum />
            <Todo />
            <EmployeeDirectory />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

