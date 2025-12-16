import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NoMatch from './pages/NoMatch.jsx'
import Departments from './pages/Departments.jsx'
import DepartmentInfo from './components/DepartmentInfo.jsx'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:employeeId" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:departmentId" element={<DepartmentInfo />} />
      </Routes>
    </>
  )
}

export default App
