import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DepartmentInfo() {

    const { departmentId } = useParams();
    const [page, setPage] = useState(1);
    const [departmentData, setDepartmentData] = useState(null);

    useEffect(() => {
        // Fetch department info based on departmentId
        const fetchDepartmentInfo = async () => {
            // Placeholder for fetch logic
            const response = await axios.get(`http://localhost:9090/employees/dept/${departmentId}?page=${page}`);
            setDepartmentData(response.data);
        }
        fetchDepartmentInfo();
    }, [departmentId, page]);
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Department Information</h2>
            {departmentData && departmentData.map((employee, index) => (
                <div key={index} className="mb-2">
                    <p className="text-lg">{index+1}. {employee.first_name} {employee.last_name} - {employee.emp_no}</p>
                </div>
            ))}
            <div>
            <a href="#" onClick={() => setPage(page - 1)} className="text-blue-500 hover:underline mr-4">Back</a>
            <span style={{margin: '16px'}} className="text-2xl">Page {page}</span>
            <a href="#" onClick={() => setPage(page + 1)} className="text-blue-500 hover:underline ml-4">Next</a>
            </div>
        </div>
    )
}