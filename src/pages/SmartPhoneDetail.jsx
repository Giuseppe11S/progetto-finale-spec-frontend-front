import { useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom"

// page detail of each products by id 
export default function SmartPhoneDetail(){

  const [eachProduct, setEachProduct] = useState({})

  const { id } = useParams()

  const eachProductApi = async (id) => {

    try{
      const response = await fetch(`http://localhost:3001/smartphones/${id}`)
      if(!response.ok){
        console.error('Non è stato possibile ricevere i dati')
      }
      const data = await response.json();
      console.log("Dati fetchati", data)
      return setEachProduct(data);
    }
    catch(error) {
      throw new Error('Non è stato possibile effettuare la chiamata API', error)
    }
  }

  useEffect(() => {
    console.log("id", id)
    eachProductApi(id)
  }, [id]);

    return (
    <div className="flex items-start justify-center mt-16 px-4">
      {eachProduct.smartphone ? (
        <ul className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-3">
          <li>
            <h2 className="text-3xl font-bold">{eachProduct.smartphone.title}</h2>
          </li>
          <li>
            <span className="font-semibold">Brand:</span> {eachProduct.smartphone.brand}
          </li>
          <li>
            <span className="font-semibold">Price:</span> ${eachProduct.smartphone.price}
          </li>
          <li>
            <span className="font-semibold">Storage:</span> {eachProduct.smartphone.storage} GB
          </li>
          <li>
            <span className="font-semibold">RAM:</span> {eachProduct.smartphone.ram} GB
          </li>
          <li>
            <span className="font-semibold">Battery:</span> {eachProduct.smartphone.battery} mAh
          </li>
          <li>
            <span className="font-semibold">Display:</span> {eachProduct.smartphone.display}"
          </li>
          <li>
            <span className="font-semibold">Released:</span> {eachProduct.smartphone.releaseYear}
          </li>
          <li className="text-gray-800 mt-3">{eachProduct.smartphone.description}</li>
          <li>
            <Link
              to="/"
              className="inline-block mt-6 px-6 py-2 hover:bg-blue-500 text-white rounded-lg bg-blue-700 transition-colors"
            >
              &larr; Torna alla Lista
            </Link>
          </li>
        </ul>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}