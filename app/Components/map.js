'use client';
import { MapContainer, TileLayer, Marker, Popup ,useMap, useMapEvent, Circle, useMapEvents,Polygon, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";


function calculateRadius(zoom) {
  return 1000 * Math.pow(2, 13 - zoom);
}
const destinationCustomIcon=L.icon({
  iconUrl:"/site/img/end.png",
  iconSize:[35,35],
  iconAnchor:[18,35],
  popupAnchor:[-1,-36]
});
const startCustomIcon=L.icon({
  iconUrl:"/site/img/start.png",
  iconSize:[35,35],
  iconAnchor:[18,35],
  popupAnchor:[-1,-36]
})
const customIcon=L.icon({
  iconUrl:"/site/img/mark.png",
  iconSize: [35, 35], 
  iconAnchor: [18, 35], 
  popupAnchor: [-1, -36]
})
const start=[27.5624272,77.6772187];
const dest=[27.572066,77.672117];
///////////////////////////////////////////////////////////////////

const Map = () => {
  const [pos,setPos]=useState([28.612894, 77.229446]);
  useEffect(()=>{
    const savedLocation=JSON.parse(localStorage.getItem("curr"));
    if(savedLocation){
      setPos(e=>savedLocation);
    }
    
  },[]);
  function handleChangePositionfn(nwltln){
    setPos(nwltln);
  }
  
 
  return (
    <>
      <MapContainer center={pos}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }} className="">
      
          <MapChild pos={pos} handleChangePositionfn={handleChangePositionfn}/>
      </MapContainer>
    </>
  );
};


////////////////////////////////////////////////////////////////

function MapChild({pos,handleChangePositionfn}){
  const map=useMap();
  const [radius,setRadius]=useState(200);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        if(position && position.coords){
          const {latitude,longitude}=position.coords;
          localStorage.setItem("curr",JSON.stringify([latitude,longitude]));
          handleChangePositionfn([latitude,longitude]);
        // map.setView([latitude,longitude]);
        // Map.panTo([latitude,longitude],{animate:true,duration:1});    
    }
      },(err)=>{console.log("Error : ",err.message)});
      map.on('zoomend',(e)=>setRadius(calculateRadius(map.getZoom())));
  },[radius]);
  useEffect(()=>{
    map.flyTo(pos);
  },[]);
  function handleLocateMeFunction(){
    map.flyTo(pos);
  }

  return(
    <>
    <button className="absolute bg-[#2f2f2f] w-[100px] h-[50px] z-[1000] bottom-1 left-1 rounded-md text-[15px]" onClick={handleLocateMeFunction}>Find Me</button>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmFuc2hhanQwMSIsImEiOiJjbHduOWFsaTMwbW5hMnJtbHJ5ZHYzdmcyIn0.kcFkjFzuMsGzTZ5Z28V5xA`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
    
      <Marker icon={customIcon} position={pos} >
        <Popup>Namaste !</Popup>
      </Marker>
      <Marker icon={startCustomIcon} position={start} draggable={true}>
        <Popup>Namaste !</Popup>
      </Marker>
      <Marker icon={destinationCustomIcon} position={dest} draggable={false}>
        <Popup>Namaste!</Popup>
      </Marker>
      <Circle center={pos} radius={calculateRadius(map.getZoom())} weight={0.3}/>
      {/* <Polygon pathOptions={{color:"red"}} positions={cor} /> */}
      <Polyline positions={[start,dest]} color="#ff8000"/>
    </>
  )
}
export default Map;