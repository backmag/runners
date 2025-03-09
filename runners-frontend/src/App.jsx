import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              My Project Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max.w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="pf-4 py-6 sm:px-0">
              <Chart />
            </div>
          </div>
        </main>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
