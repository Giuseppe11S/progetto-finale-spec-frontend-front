import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

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
    <>
    {eachProduct.smartphone ? (
      <div>
        <h1>{eachProduct.smartphone.title}</h1>
        <p>Brand: {eachProduct.smartphone.brand}</p>
        <p>Price: ${eachProduct.smartphone.price}</p>
        <p>Storage: {eachProduct.smartphone.storage}GB</p>
        <p>RAM: {eachProduct.smartphone.ram}GB</p>
        <p>Battery: {eachProduct.smartphone.battery}mAh</p>
        <p>Display: {eachProduct.smartphone.display}"</p>
        <p>Released: {eachProduct.smartphone.releaseYear}</p>
        <p>{eachProduct.smartphone.description}</p>
      </div>
    ) : (
      <p>Caricamento...</p>
    )}
    {console.log("Oggetto da renderizzare:", eachProduct)}
    </>
  )

}