import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";

const EmployeeList = () => {
    const[employees, setEmployee] = useState([]);

    useEffect(()=>{
        getEmployees();
    }, []);

    const getEmployees = async () =>{
        const response = await axios.get('http://localhost:9000/employees');
        console.log(response.data);
        setEmployee(response.data);
    }


    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>UID</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index)=>(
                         <tr key={employee.id}>
                         <td>{index + 1}</td>
                         <td>{employee.uid}</td>
                         <td>{employee.name}</td>
                         <td>{employee.address}</td>
                         <td>
                             <a className="button is-small is-info">Edit</a>
                             <a className="button is-small is-danger">Hapus</a>
                         </td>
                     </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
