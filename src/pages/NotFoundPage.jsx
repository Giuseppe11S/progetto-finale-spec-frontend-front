import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="flex items-center flex-col mt-[100px]">
      <h1>404 - Pagina non trovata</h1>
      <Link to="/" className="mt-[20px] mt-6 px-6 py-2 hover:bg-blue-500 text-white rounded-lg bg-blue-700 transition-colors">Torna alla home</Link>
    </div>
  )
}