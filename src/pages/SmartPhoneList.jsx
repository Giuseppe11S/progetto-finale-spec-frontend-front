import { useEffect, useState } from "react";

// import prop
import SmartPhoneCard from "../components/SmartPhoneCard";
import SearchBar from "../components/SearchBar";

export default function SmartPhoneList(){

  const [search, setSearch] = useState('')
  const [badget, setBadget] = useState('')
  const [dataSm, setDataSm] = useState([])
  const [sortOrder, setSortOrder] = useState('')

  const updateSearch = (e) => {
    return setSearch(e.target.value);
  }
  
  // call in get to have all the list
  const getSmartPhone = async () => {
    try{
      const response = await fetch(`http://localhost:3001/smartphones`);

      if(!response.ok){
        console.error('Non è stato possibile ricevere i dati');
      }

      const list = await response.json();
      
      // for each smartphone in the list, fetch the full details by id in parallel
      const fullData = await Promise.all(
      list.map(async (s) => {
        const res = await fetch(`http://localhost:3001/smartphones/${s.id}`);
        const data = await res.json();
        return data.smartphone; 
      })
    );
    
    setDataSm(fullData);
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
    // filter for input user
    p.title.toLowerCase().includes(search.toLowerCase()))
    // filter for input type badget
    .filter(p => !badget || p.category === badget) 

    // amount of products avaible:
    const amountProducts = filteredData.length;

    // type of badge
    const budgetType = (e) => {
      setBadget(e.target.value)
    }

    const updateSort = (e) => setSortOrder(e.target.value)

    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === 'title-az') return a.title.localeCompare(b.title)
      if (sortOrder === 'title-za') return b.title.localeCompare(a.title)
      return 0
    })
    
  return (
    <>
    <SearchBar
    updateSearch={updateSearch}
    amountProducts={amountProducts}
    budgetType={budgetType}
    updateSort={updateSort}
    />
    <div className="flex justify-center flex-wrap mt-[50px] gap-[30px] mb-[50px]">
      {sortedData.map((s) => (
        <SmartPhoneCard
        key={s.id}
        {...s}
        title={s.title}
        category={s.category}
        id={s.id}
        brand={s.brand}
        price={s.price}
        ram={s.ram}
        storage={s.storage}
        battery={s.battery}
        display={s.display}
        releaseYear={s.releaseYear}
        />
      ))}
    </div>
    </>
  )
}