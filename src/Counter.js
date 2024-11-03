
import {useState} from 'react'
const Counter = () => {
    let [counter, setCounter] = useState(0)
    let [employees, setEmployees] = useState([
      {empId: 1234, name:"John", designation:'SE'},
      {empId: 5678, name:"Jane", designation:'SSE'},
      {empId: 9012, name:"Bob", designation:'PM'}
    ])
    const addEmployee =()=>{
      setEmployees([...employees, {empId:3456, name:"Tom", designation:"TL"},
    ]);
    };
    const handleIncrement=()=>{
        if (counter<20)
          setCounter(counter+1)
        else
          return
    }
    const handleDecrement=()=>{
        if (counter>0)
          setCounter(counter-1)
        else
          return
    }
    return(
        <>
        <table style={{width: "50%"}} className="bg-black-400 bg-opacity-50 text-lg">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th >Employee Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee)=>{
              return(
                <tr key = {employee.empId}>
                  <td>{employee.empId}</td>
                  <td >{employee.name}</td>
                  <td >{employee.designation}</td>
                </tr>
              )
            })}
          </tbody>
        </table><br/>
        <button className="ml-2 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={addEmployee}>Add an Employee</button>
        <br/><br/><br/><br/>

        <h1 className='ml-2'>Current Value {counter}</h1><br/>
        <button className="mr-4 ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleIncrement}>Increment</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Counter