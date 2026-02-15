import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 'Mon', bookings: 120, revenue: 24000 },
  { day: 'Tue', bookings: 180, revenue: 36000 },
  { day: 'Wed', bookings: 150, revenue: 30000 },
  { day: 'Thu', bookings: 220, revenue: 44000 },
  { day: 'Fri', bookings: 300, revenue: 60000 },
]

export default function Analytics() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="bookings" stroke="#60a5fa" />
          <Line type="monotone" dataKey="revenue" stroke="#34d399" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
