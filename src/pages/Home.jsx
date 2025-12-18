import React, { useState } from 'react'
import EmployeeInfo from '../components/EmployeeInfo';
import { useNavigate, useParams } from 'react-router-dom';


export default function Home() {
    const { employeeId: urlEmployeeId } = useParams();
    // if no employeeId in URL param, start with empty string and wait for user input
    const [employeeId, setEmployeeId] = useState(urlEmployeeId || ''); 

    const navigate = useNavigate();

    function onHandleSubmit() {
        if (employeeId.trim() === '') {
            alert('No input provided');
            return;
        }
        console.log("Employee ID submitted:", employeeId);
        // once user inputs ID, navigate to that URL and display EmployeeInfo component
        navigate(`/employee/${employeeId}`); 
    }

    const idToDisplay = urlEmployeeId;
    return (
        <div>
            <section className="text-center py-10">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Employee Management</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Quickly access employee records, department structures, and administrative data.</p>
            </section>
            <div className="max-w-md mx-auto">
            <div className="flex shadow-sm rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                <input 
                    type="text" 
                    placeholder="Enter Employee ID..."
                    className="flex-1 px-4 py-3 outline-none" 
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)} 
                />
                <button 
                    className="bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors"
                    onClick={onHandleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
            {idToDisplay && (
                <div>
                    <EmployeeInfo employeeId={employeeId} />
                </div>
)} 
        </div>
    )
}