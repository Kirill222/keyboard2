import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import TaskPage from './pages/TaskPage/TaskPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/task' element={<TaskPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
