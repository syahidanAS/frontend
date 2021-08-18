import EmployeeList from "./components/EmployeeList"
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <EmployeeList/>
      </div>
      </div>
    </div>
  );
}

export default App;
