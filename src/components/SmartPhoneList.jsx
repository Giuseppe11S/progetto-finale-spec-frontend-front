import { useEffect, useState } from "react";

// import prop
import SmartPhoneCard from "./SmartPhoneCard";

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
    <div className="flex justify-center flex-wrap mt-[50px] gap-[30px]">
      {dataSm.map((s) => (
        <SmartPhoneCard
        key={s.id}
        title={s.title}
        category={s.category}
        id={s.id}/>
      ))}
    </div>
    </>
  )
}