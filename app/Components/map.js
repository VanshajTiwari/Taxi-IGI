'use client';
import { MapContainer, TileLayer, Marker, Popup ,useMap, useMapEvent, Circle, useMapEvents,Polygon} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";


function calculateRadius(zoom) {
  return 1000 * Math.pow(2, 13 - zoom);
}
const destinationCustomIcon=L.icon({
  iconUrl:"/site/img/destination.png",
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
const cor=[[77.6714787, 27.5723944],
[77.6714827, 27.5717847],
[77.6724641, 27.5717898],
[77.672464, 27.5718059],
[77.6725057, 27.5718061],
[77.6725054, 27.5718499],
[77.6725616, 27.5718502],
[77.6725608, 27.5719842],
[77.6725959, 27.5719844],
[77.6725945, 27.5721935],
[77.6725562, 27.5721933],
[77.6725553, 27.5723291],
[77.6725005, 27.5723289],
[77.6725003, 27.5723695],
[77.6724563, 27.5723693],
[77.6724561, 27.5723995],
[77.6714787, 27.5723944]]

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
      <Marker icon={destinationCustomIcon} position={[27.5624272,77.6772187]} draggable={true}>
        <Popup>Namaste !</Popup>
      </Marker>
      <Circle center={pos} radius={calculateRadius(map.getZoom())} weight={0.3}/>
      <Polygon pathOptions={{color:"red"}} positions={cor} />
    </>
  )
}
export default Map;