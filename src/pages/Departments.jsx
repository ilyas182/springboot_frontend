import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Departments() {

    const [departments, setDepartments] = useState([]);

    
    // page to fetch and display all departments
    useEffect(() => {
        const fetchDepartments =  async () => {
        try {
            const response = await axios.get('http://localhost:9090/departments/all');
            const departments = response.data.sort((a, b) => a.dept_no.localeCompare(b.dept_no));
            setDepartments(departments);
        } catch (error) {
            console.error('Error fetching Departments:', error);
        }
    };
        fetchDepartments();
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Departments</h2>
            <table className='text-sm text-left rtl:text-right text-body'>
            <thead className='text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default'>
            <tr>
                <th scope='col' className="px-6 py-3 font-medium">Department name</th>
                <th scope='col' className="px-6 py-3 font-medium">Department number</th>
            </tr>
            </thead>
            <tbody>
                {departments.map((department, index) => (
                <tr className='bg-neutral-primary border-b border-default' key={index}>
                <th scope="row" className='px-6 py-4 font-medium text-heading whitespace-nowrap'><Link to={`/departments/${department.dept_no}`}>{department.dept_name}</Link></th>
                <td className='px-6 py-4'><Link to={`/departments/${department.dept_no}`}>{department.dept_no}</Link></td>
            </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}