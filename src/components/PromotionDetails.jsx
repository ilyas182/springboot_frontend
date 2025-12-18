import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PromotionModal from "./PromotionModal";

export default function PromotionDetails(props) {

    const [departments, setDepartments] = useState([]);
    const [newSalary, setNewSalary] = useState(0);
    const [newTitle, setNewTitle] = useState(null);
    const [newDepartment, setNewDepartment] = useState(null);
    const [effectiveDate, setEffectiveDate] = useState();
    const [promotionModal, setPromotionModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getDepartments = async () => {
        const response = await axios.get('http://localhost:9090/departments/all');
        setDepartments(response.data.filter(dept => dept.dept_no != props.employeeData.departmentHistory.at(-1).dept_no));
        console.log('Departments fetched:', response.data);
        }
        getDepartments();
    }, [props.employeeData.departmentHistory])

    const handlePromoteButton = async () => {
        try {
            const body = {
                emp_no: props.employeeData.emp_no,
                title: newTitle,
                salary: newSalary,
                deptNo: newDepartment,
                start_date: effectiveDate
            }
            console.log('Promotion request body:', body);
            const response = await axios.post(`http://localhost:9090/employees/promote`, body);
            console.log('Promotion successful:', response.data);
            toast.success(`Employee ${props.employeeData.emp_no} promoted successfully!`);
            navigate('/employee/' + props.employeeData.emp_no);
        }
        catch (error) {
            console.error('Error during promotion:', error);
        }
    }
    // format date from yyyy-mm-dd to dd-mm-yyyy for backend
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    }

    const handleDateChange = (e) => {
        const date = new Date(e.target.value);
        if (date < new Date()) {
            alert('Effective date cannot be in the past.');
            return;
        }
        setEffectiveDate(formatDate(e.target.value));
    }
    
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
            <input type="number" placeholder="Salary" className="border p-2 mb-4" onChange={(e) => setNewSalary(e.target.value)} />
            <label className="block mb-2 font-semibold">New Department ID:</label>
            <select value={newDepartment} onChange={(e) => {setNewDepartment(e.target.value); console.log(newDepartment)}} className="border p-2 mb-4">
                <option value=''>Select Department</option>
                {departments.map((dept) => (
                    <option key={dept.dept_no} value={dept.dept_no}>
                        {dept.dept_name} ({dept.dept_no})
                    </option>
                ))}
            </select>
            <label className="block mb-2 font-semibold">Effective Date:</label>
            <input type="date" className="border p-2 mb-4" onChange={handleDateChange} />
            <br></br>
            <button 
            //only if effective date is set and at least one of new title, salary, or department is set, enable button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ${effectiveDate && (newTitle || newSalary || newDepartment) ? '' : 'opacity-50 cursor-not-allowed'}`} 
            onClick={() => { setPromotionModal(true) }}>
                Promote
            </button>
            {/* add promotion confirmation modal to confirm promotion */}
            {promotionModal && 
            <PromotionModal 
                employee={props.employeeData}
                title={newTitle}
                salary={newSalary}
                department={newDepartment}
                effectiveDate={effectiveDate}
                onClose={() => setPromotionModal(false)} 
                onPromote={handlePromoteButton} />}

        </div>
    )
}