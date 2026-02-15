import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import KanbanBoard from './pages/KanbanBoard'
import CalendarPage from './pages/CalendarPage'
import MoviesTable from './pages/MoviesTable'
import Analytics from './pages/Analytics'
import { ThemeProvider, useTheme } from './theme/ThemeContext'

function Layout({ page, setPage }) {
  const { dark } = useTheme()

  return (
    <div
      className={`flex h-screen ${
        dark ? 'bg-slate-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <Sidebar setPage={setPage} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto p-6">
          {page === 'dashboard' && <Dashboard />}
          {page === 'kanban' && <KanbanBoard />}
          {page === 'calendar' && <CalendarPage />}
          {page === 'movies' && <MoviesTable />}
          {page === 'analytics' && <Analytics />}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('dashboard')

  return (
    <ThemeProvider>
      <Layout page={page} setPage={setPage} />
    </ThemeProvider>
  )
}
