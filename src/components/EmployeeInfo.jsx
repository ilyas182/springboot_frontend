import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function EmployeeInfo() {

    const { employeeId } = useParams();
    
    const [employeeData, setEmployeeData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getEmployeeData = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/employees/${employeeId}`);
            console.log('Employee Data:', response.data);
            setError(false);
            setEmployeeData(response.data);
        } catch (error) {
            console.error('Error fetching employee data:', error);
            setEmployeeData(null);
            setError(true);
        }
    };
    console.log("Fetching data for employee ID:", employeeId);
    getEmployeeData();
    }, [employeeId]);


    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Employee Information</h2>
            {employeeData && <p>Displaying information for Employee ID: {JSON.stringify(employeeData)}</p>}
            {error && <p className="text-red-500">Error: Employee with ID {employeeId} not found.</p>}
        </div>
    )
}