import { useEffect, useState } from "react";


export default function SmartPhoneList(){

  const [dataSm, setDataSm] = useState([])
  
  // call in get to have all the list
  const getSmartPhone = async () => {
    try{
      const response = await fetch(`http://localhost:3001/smartphones`);
      const data = await response.json();
      if(!response.ok){
        console.error('Non è stato possibile ricevere i dati');
      }
      return setDataSm(data);
    }
    catch(error) {
      console.error('Non è stato possibile effettuare la chiamata API')
    }
  }

    useEffect(() => {
    getSmartPhone();
  }, []);

  return (
    <>
    {dataSm.map((s) => (
      <h1>{s.title}</h1>
    ))}
    </>
  )
}