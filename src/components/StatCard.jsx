export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
      <div className="mt-2">{icon}</div>
    </div>
  )
}
