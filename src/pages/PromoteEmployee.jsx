import axios from "axios";
import { useState } from "react";
import PromotionDetails from "../components/PromotionDetails.jsx";
import toast from 'react-hot-toast';

export default function PromoteEmployee() {

    const [validId, setValidId] = useState(false);
    const [employeeId, setEmployeeId] = useState(null);
    const [employeeData, setEmployeeData] = useState(null);
    const handleChange = (e) => {
        setEmployeeId(e.target.value);
    }
    const onHandleSubmit = async () => {

        if (!employeeId || employeeId.trim() === '') {
            toast.error("No employee ID input provided.");
            return;
        }
        try {
           const response = await axios.get(`http://localhost:9090/employees/${employeeId}`);
            setEmployeeData(response.data);
            setValidId(true);
        }
        catch (error) {
            toast.error(`Employee with ID ${employeeId} not found.`);
            setValidId(false);
            return;
        }
    }
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Promote Employee Page</h2>
            <p>Enter employee ID to promote:</p>
            <input 
            type="text" 
            className="border p-2 mb-4" 
            placeholder="Employee ID"
            onChange={handleChange} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onHandleSubmit}>Search</button>
            {validId && <PromotionDetails employeeData={employeeData} />}
        </div>
    )
}