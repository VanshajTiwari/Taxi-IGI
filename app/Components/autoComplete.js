"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { getData } from "../API/locationSuggestion";
import { useEffect, useState } from "react";
export default function AutoComplete() {
  const [locationSuggestion,setlocationSuggestion]=useState([]);
  const [keyword,setKeyword]=useState("");
  const [selectedLocation,setSelectedLocation]=useState("");
  function getLocationObject(value){
    console.log("clickde");
    setKeyword(value);
  }
    useEffect(()=>{
      async function fetchDataCountry(location=""){
          setlocationSuggestion(await getData(location));
      }
      fetchDataCountry(keyword);
    },[keyword]);


  return (
    <div className='text-red-300 bg-black'>
      <input value={keyword} onChange={e=>setKeyword(e.target.value)}/><MagnifyingGlass size={30} className='pr-2'/>
      <div className='flex flex-col'>
        {locationSuggestion.map(location=><span key={location.place_id} value={JSON.stringify(location)} onClick={(e)=>getLocationObject(e.target.innerHTML)} className=" z-[1000]">{location.display_name}</span>)}
      </div>
      </div>
  );
}
