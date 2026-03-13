import { useContext } from "react"
import { Link } from "react-router-dom"
import { X, GitCompareArrows} from "lucide-react"
import { CompareContext } from "../context/CompareContext"

export default function ComparePage() {
  
  const { compares, setCompares } = useContext(CompareContext)

  const removeCompare = (id) => {
    setCompares(compares.filter(c => c.id !== id))
  }

  if (compares.length === 0) return <EmptyCompare />

  return (
    <div className="px-[40px] mt-[40px]">

      {/* header */}
      <div className="flex justify-between items-start mb-[30px]">
        <div>
          <h1 className="text-[28px] font-bold text-cyan-500">Comparatore</h1>
          <p className="text-gray-400 text-[14px]">{compares.length}/2 smartphone selezionati</p>
        </div>
        <button
          onClick={() => setCompares([])}
          className="text-gray-400 text-[14px] hover:text-gray-600 transition cursor-pointer">
          Resetta tutto
        </button>
      </div>

      {/* tabella */}
      <div className="border border-gray-200 rounded-[16px] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-[30px] py-[25px] text-gray-400 font-normal w-[35%]">Specifiche</th>
              {compares.map(s => (
                <th key={s.id} className="text-left px-[30px] py-[25px] w-[32%]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[11px] text-gray-400 font-semibold tracking-[1px]">{s.brand.toUpperCase()}</p>
                      <p className="text-[18px] font-bold text-gray-800">{s.title}</p>
                      <p className="text-[20px] font-bold text-cyan-500 mt-[4px]">€{s.price}</p>
                    </div>
                    <button onClick={() => removeCompare(s.id)} className="text-gray-300 hover:text-gray-500 transition cursor-pointer">
                      <X size={18}/>
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>

            {/* Brand */}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Brand</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.brand}</td>
              ))}
            </tr>

            {/* Categoria */}
            <tr className="border-b border-gray-100 bg-white">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Categoria</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.category}</td>
              ))}
            </tr>

            {/* Prezzo */}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Prezzo</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">€{s.price}</td>
              ))}
            </tr>

            {/* Storage */}
            <tr className="border-b border-gray-100 bg-white">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Storage</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.storage}GB</td>
              ))}
            </tr>

            {/* RAM */}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">RAM</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.ram}GB</td>
              ))}
            </tr>

            {/* Batteria */}
            <tr className="border-b border-gray-100 bg-white">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Batteria</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.battery} mAh</td>
              ))}
            </tr>

            {/* Display */}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Display</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.display}"</td>
              ))}
            </tr>

            {/* Anno */}
            <tr className="border-b border-gray-100 bg-white">
              <td className="px-[30px] py-[18px] text-gray-400 text-[14px]">Anno</td>
              {compares.map(s => (
                <td key={s.id} className="px-[30px] py-[18px] text-gray-700 text-[14px]">{s.releaseYear}</td>
              ))}
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}


function EmptyCompare() {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] gap-[20px]">
      <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-[25px] rounded-[24px]">
        <GitCompareArrows className="text-white" size={45} />
      </div>
      <div className="text-center">
        <h2 className="text-[22px] font-bold text-gray-800">Nessuno smartphone da confrontare</h2>
        <p className="text-gray-400 mt-[8px]">Seleziona fino a 2 smartphone dalla lista per confrontarli</p>
      </div>
      <Link to="/">
        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-[40px] py-[12px] rounded-[12px] font-semibold flex items-center gap-2 hover:opacity-90 transition">
          ← Vai alla lista
        </button>
      </Link>
    </div>
  )
}