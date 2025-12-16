import React, { useState } from 'react'
import EmployeeInfo from '../components/EmployeeInfo';
import { useNavigate, useParams } from 'react-router-dom';


export default function Home() {
    const { employeeId: urlEmployeeId } = useParams();
    const [employeeId, setEmployeeId] = useState(urlEmployeeId || '');

    const navigate = useNavigate();
    
    

    function onHandleSubmit() {
        if (employeeId.trim() === '') {
            alert('No input provided');
            return;
        }
        console.log("Employee ID submitted:", employeeId);
        navigate(`/employee/${employeeId}`);
    }

    const idToDisplay = urlEmployeeId;
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Employee Management System</h2>
            <label>Enter employee ID to view details:</label>
            <input 
            type="text" 
            className="border border-gray-300 rounded px-2 py-1 ml-2" 
            value = {employeeId}
            onChange={(e) => setEmployeeId(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600" onClick={onHandleSubmit}>View Employee</button>
            {idToDisplay && (
                <div>
                    <EmployeeInfo employeeId={employeeId} />
                </div>
)} 
        </div>
    )
}