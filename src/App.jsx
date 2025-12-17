import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NoMatch from './pages/NoMatch.jsx'
import Departments from './pages/Departments.jsx'
import DepartmentInfo from './components/DepartmentInfo.jsx'
import PromoteEmployee from './pages/PromoteEmployee.jsx'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-center" />
      <Navbar />
      <main className='max-w-6xl mx-auto p-6'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:employeeId" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:departmentId" element={<DepartmentInfo />} />
        <Route path="/promote" element={<PromoteEmployee />} />
      </Routes>
      </main>
      </div>
    </>
  )
}

export default App
