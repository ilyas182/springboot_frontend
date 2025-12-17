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
            <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="bg-blue-600 px-6 py-3">
            <h2 className="text-white font-semibold">Employee Details</h2>
        </div>
        
            {error && <p className="text-red-500">Error: Employee with ID {employeeId} not found.</p>}
            {employeeData && <p>Displaying information for Employee ID: {employeeData.emp_no}</p>}
            <p>Name: {employeeData?.first_name} {employeeData?.last_name}</p>
            <p>Gender: {employeeData?.gender}</p>
            <p>Birth Date: {employeeData?.birth_date}</p>
            <p>Hire Date: {employeeData?.hire_date}</p>
            <p className="font-semibold">Department History:</p>
            {employeeData && employeeData.departmentHistory.length > 0 ? (
                <ul className="list-disc list-inside mb-4">
                    {employeeData.departmentHistory.map((dept, index) => (
                        <div key={index}>
                            <p>{dept.dept_name}</p>
                            Dept No: {dept.dept_no}, From: {dept.from_date} - {dept.to_date === '9999-01-01' ? 'Present' : dept.to_date}
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No department history available.</p>
            )}
            <p className="font-semibold">Salary History:</p>
            {employeeData && employeeData.salaryHistory.length > 0 ? (
                <ul className="list-disc list-inside mb-4">
                    {employeeData.salaryHistory.map((salary, index) => (
                        <li key={index}>
                            Salary: {salary.salary}, From: {salary.from_date} - {salary.to_date === '9999-01-01' ? 'Present' : salary.to_date}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No salary history available.</p>
            )}
            <p className="font-semibold">Title History:</p>
            {employeeData && employeeData.titleHistory.length > 0 ? (
                <ul className="list-disc list-inside mb-4">
                    {employeeData.titleHistory.map((title, index) => (
                        <li key={index}>
                            Title: {title.title}, From: {title.from_date} - {title.to_date === '9999-01-01' ? 'Present' : title.to_date}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No salary history available.</p>
            )}
            <p className="font-semibold">Management:</p>
            {employeeData && employeeData.departmentManagerHistory.length > 0 ? (
                <ul className="list-disc list-inside mb-4">
                    {employeeData.departmentManagerHistory.map((manager, index) => (
                        <li key={index}>
                            Department: {manager.dept_name}, From: {manager.fromDate} - {manager.toDate === '9999-01-01' ? 'Present' : manager.to_date}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No management history available.</p>
            )}
            
        </div>
        </div>
    )
}