import { useEffect, useState } from "react";

// import prop
import SmartPhoneCard from "../components/SmartPhoneCard";
import SearchBar from "../components/SearchBar";

export default function SmartPhoneList(){

  const [search, setSearch] = useState('')
  const [dataSm, setDataSm] = useState([])

  const updateSearch = (e) => {
    return setSearch(e.target.value);
  }
  
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

  // filter for searchbar
  const filteredData = dataSm.filter((p) =>
  p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <SearchBar
    updateSearch={updateSearch}/>
    <div className="flex justify-center flex-wrap mt-[50px] gap-[30px]">
      {filteredData.map((s) => (
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