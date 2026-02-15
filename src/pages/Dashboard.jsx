import StatCard from '../components/StatCard'
import { Users, Ticket, IndianRupee } from 'lucide-react'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Users" value="1,245" icon={<Users />} />
        <StatCard title="Tickets Sold" value="8,432" icon={<Ticket />} />
        <StatCard title="Revenue" value="₹12.4L" icon={<IndianRupee />} />
      </div>
    </div>
  )
}
