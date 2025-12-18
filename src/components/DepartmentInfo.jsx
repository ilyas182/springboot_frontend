import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function DepartmentInfo() {

    const { departmentId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams('page=1');
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
    const [departmentData, setDepartmentData] = useState(null);

    // page to fetch and display department info with pagination
    useEffect(() => {
        const fetchDepartmentInfo = async () => {
            const response = await axios.get(`http://localhost:9090/employees/dept/${departmentId}?page=${page}`);
            setDepartmentData(response.data);
        }
        fetchDepartmentInfo();
    }, [departmentId, page]);

    const handleBackBtn = () => {
        if (page > 1) {
            setPage(page - 1);
            setSearchParams({ page: page - 1 });
        }
    }
    
    const handleNextBtn = () => {
        setPage(page + 1);
        setSearchParams({ page: page + 1 });
    }
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Department Information</h2>
            {departmentData && departmentData.length > 0 && departmentData.map((employee, index) => (
                <div key={index} className="mb-2">
                    <p className="text-lg">{(page - 1) * 20 + index + 1}. {employee.first_name} {employee.last_name} - {employee.emp_no}</p>
                </div>
            ))}
            {departmentData && departmentData.length === 0 && (<p>No employees to display.</p>
            )}
            <div>
            <a href="#" onClick={handleBackBtn} className={`text-blue-500 hover:underline mr-4 ${page === 1 ? 'pointer-events-none text-gray-400' : ''}`}>Back</a>
            <span className="text-2xl mx-4">Page {page}</span>
            <a href="#" onClick={handleNextBtn} className={`text-blue-500 hover:underline ml-4 ${departmentData && departmentData.length === 0 ? 'pointer-events-none text-gray-400' : ''}`}>Next</a>
            </div>
        </div>
    )
}