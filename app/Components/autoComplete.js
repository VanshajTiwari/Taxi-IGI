"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { getData } from "../API/locationSuggestion";
import { useEffect, useState } from "react";
export default function AutoComeplete() {
    const [locationSuggestion,setlocationSuggestion]=useState([]);
    const [keyword,setKeyword]=useState("");
    const [selectedLocation,setSelectedLocation]=useState("");
    useEffect(()=>{
      async function fetchDataCountry(location=""){
          setlocationSuggestion(await getData(location));
          console.log(locationSuggestion);
      }
      fetchDataCountry(keyword);
      console.log(selectedLocation);
    },[keyword]);
  return (
    <div className="flex w-full">
      <div className="dropdown-field">
              <input value={keyword} onChange={(e)=>setKeyword(e.target.value)} className="absolute max-w-[5px]"/>
							<select className="max-w-[400px]" onChange={(e)=>{setSelectedLocation(JSON.parse(e.target.value))}}>
              {
                locationSuggestion.map((e)=><option key={e.place_id} value={JSON.stringify(e)} className="absolute ">{e.display_name}</option>)
              }
                <option> </option>
							</select>
							<CaretDown/>
						</div>
    </div>
  );
}
