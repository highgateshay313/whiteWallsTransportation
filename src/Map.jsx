import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// const position = [32.7767, -96.7970];

const defaultIcon = new L.Icon({
    iconUrl: 
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: 
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = defaultIcon

export default function Map() {

        const detriot = [42.3314, -83.0458];

    return (
        <div style={{height: "300px", width: "100%"}}>
            <MapContainer center={detriot} zoom={12} style={{height: "100%", width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={detriot}>
                <Popup>
                    WhiteWalls Transportation<br/> Detroit, MI
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}