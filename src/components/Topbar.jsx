import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../theme/ThemeContext'

export default function Topbar() {
  const { dark, setDark } = useTheme()

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-slate-700">
      <h2 className="font-semibold tracking-wide">Admin Dashboard</h2>

      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded hover:bg-slate-700 transition"
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  )
}
