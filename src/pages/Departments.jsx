import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Departments() {

    const [departments, setDepartments] = useState([]);

    const fetchDepartments =  async () => {
        try {
            const response = await axios.get('http://localhost:9090/departments/all');
            const departments = response.data.sort((a, b) => a.dept_no.localeCompare(b.dept_no));
            setDepartments(departments);
        } catch (error) {
            console.error('Error fetching Departments:', error);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Departments</h2>
            <ul>
                {departments.map((department, key) => (
                    <div key={key} className="mb-2">
                        <Link key={department.dept_no} to={`/departments/${department.dept_no}`} >{department.dept_no} - {department.dept_name}</Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}