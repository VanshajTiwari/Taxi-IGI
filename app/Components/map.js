'use client';
import { MapContainer, TileLayer, Marker, Popup ,useMap, useMapEvent, Circle, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";

function calculateRadius(zoom) {
  return 1000 * Math.pow(2, 13 - zoom);
}
const customIcon=L.icon({
  iconUrl:"/site/img/mark.png",
  iconSize: [35, 35], 
  iconAnchor: [18, 35], 
  popupAnchor: [-3, -76]
})


///////////////////////////////////////////////////////////////////

const Map = () => {
  const [pos,setPos]=useState([28.70405920,77.10249020]);

  function handleChangePositionfn(nwltln){
    setPos(nwltln);
  }
  return (
    <MapContainer center={pos}
    zoom={14}
    scrollWheelZoom={false}
    style={{ height: "100%", width: "100%" }}>
        <MapChild pos={pos} handleChangePositionfn={handleChangePositionfn}/>
    </MapContainer>
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
        handleChangePositionfn([latitude,longitude]);
        map.flyTo([latitude,longitude]);
        // map.setView([latitude,longitude]);
        // Map.panTo([latitude,longitude],{animate:true,duration:1});
        
    }
    },(err)=>{console.log("Error : ",err.message)});
    map.on('zoomend',(e)=>setRadius(calculateRadius(map.getZoom())));
},[radius]);

  return(
    <>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmFuc2hhanQwMSIsImEiOiJjbHduOWFsaTMwbW5hMnJtbHJ5ZHYzdmcyIn0.kcFkjFzuMsGzTZ5Z28V5xA`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker icon={customIcon} position={pos} >
        <Popup>Namaste !</Popup>
      </Marker>
      <Circle center={pos} radius={calculateRadius(map.getZoom())} weight={0.3}/>
    </>
  )
}
export default Map;