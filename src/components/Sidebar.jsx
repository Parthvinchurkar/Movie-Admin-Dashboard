import {
  LayoutDashboard,
  Kanban,
  Calendar,
  Film,
  BarChart3,
} from 'lucide-react'

export default function Sidebar({ setPage }) {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-700 p-4">
      <h1 className="text-xl font-bold mb-8 tracking-wide">🎬 Movie Admin</h1>

      <nav className="space-y-2">
        {[
          ['dashboard', LayoutDashboard, 'Dashboard'],
          ['kanban', Kanban, 'Kanban'],
          ['calendar', Calendar, 'Calendar'],
          ['movies', Film, 'Movies'],
          ['analytics', BarChart3, 'Analytics'],
        ].map(([key, Icon, label]) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className="
              flex items-center gap-3 w-full px-3 py-2 rounded-lg
              hover:bg-slate-800 transition-all duration-200
            "
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
