import { useState } from 'react'

const initialMovies = [
  { id: 1, name: 'Interstellar', status: 'Upcoming' },
  { id: 2, name: 'Oppenheimer', status: 'Running' },
  { id: 3, name: 'Joker', status: 'Ended' },
  { id: 4, name: 'Inception', status: 'Running' },
]

export default function MoviesTable() {
  const [movies, setMovies] = useState(initialMovies)
  const [search, setSearch] = useState('')
  const [newMovie, setNewMovie] = useState('')
  const [page, setPage] = useState(1)

  const ITEMS_PER_PAGE = 3

  // 🔍 Search
  const filteredMovies = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  )

  // 📄 Pagination
  const start = (page - 1) * ITEMS_PER_PAGE
  const paginated = filteredMovies.slice(start, start + ITEMS_PER_PAGE)
  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE)

  // ➕ Add
  const addMovie = () => {
    if (!newMovie) return
    setMovies([
      ...movies,
      { id: Date.now(), name: newMovie, status: 'Upcoming' },
    ])
    setNewMovie('')
  }

  // ❌ Delete
  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id))
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Movies Management</h1>

      {/* Search + Add */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-slate-700 outline-none"
        />

        <input
          placeholder="New movie name"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          className="p-2 rounded bg-slate-700 outline-none"
        />

        <button
          onClick={addMovie}
          className="bg-blue-600 px-4 rounded"
        >
          Add Movie
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-slate-600">
            <th className="py-2">Movie</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((movie) => (
            <tr key={movie.id} className="border-b border-slate-700">
              <td className="py-2">{movie.name}</td>
              <td>{movie.status}</td>
              <td>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="text-red-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? 'bg-blue-600' : 'bg-slate-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
