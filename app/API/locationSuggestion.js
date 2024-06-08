export async function getData(location=""){
    const res=await fetch(`https://nominatim.openstreetmap.org/search.php?q=${location!==""?location:"india"}&polygon_geojson=1&format=jsonv2`);
    return await res.json();

}