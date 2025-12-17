import { useState } from "react";

export default function PromotionDetails(props) {

    const [newSalary, setNewSalary] = useState();
    const [newTitle, setNewTitle] = useState();
    const [newDepartment, setNewDepartment] = useState();
    const [effectiveDate, setEffectiveDate] = useState();

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Employee Details:</h2>
            <p>Name: {props.employeeData.first_name} {props.employeeData.last_name}</p>
            <p>Current title: {props.employeeData.titleHistory.at(-1).title}</p>
            <p>Current salary: {props.employeeData.salaryHistory.at(-1).salary}</p> 
            <p>Current department: {props.employeeData.departmentHistory.at(-1).dept_name} ({props.employeeData.departmentHistory.at(-1).dept_no})</p> 
            <h2 className="text-2xl font-bold mb-4">Promotion Details:</h2>

            <label className="block mb-2 font-semibold">New Title:</label>
            <input type="text" placeholder="New Title" className="border p-2 mb-4" onChange={(e) => setNewTitle(e.target.value)} />
            <label className="block mb-2 font-semibold">New salary:</label>
            <input type="number" placeholder="Salary Increase" className="border p-2 mb-4" onChange={(e) => setNewSalary(e.target.value)} />
            <label className="block mb-2 font-semibold">New Department:</label>
            <input type="text" placeholder="Department" className="border p-2 mb-4" onChange={(e) => setNewDepartment(e.target.value)}   />
            <label className="block mb-2 font-semibold">Effective Date:</label>
            <input type="date" className="border p-2 mb-4" onChange={(e) => setEffectiveDate(e.target.value)} />

        </div>
    )
}