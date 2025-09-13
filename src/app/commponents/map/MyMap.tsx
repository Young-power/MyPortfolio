"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import "@/styles/leaflet.css";
import Image from "next/image";
// 🔹 Créer une icône par défaut personnalisée
const DefaultIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon; // ← garantit que tous les markers utilisent cette icône

const position: LatLngExpression = [5.345317, -3.978038]; // Abidjan

export default function MyMap() {
    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup><div className="text-center">
                    <h3 className="font-bold">Abidjan (Cocody) 🚀</h3>
                    <Image
                        src="/assets/Mahine.jpg"
                        alt="Abidjan"
                        width={150}
                        height={150}
                        className="w-40 h-28 object-cover rounded-lg mt-2"
                    />
                    <div className=" flex flex-col justify-center items-center mt-3 ">
                        <h2 className="font-bold">Mahine_K </h2>
                        <span>+225 0141311165</span>
                    </div>
                </div></Popup>
            </Marker>
        </MapContainer>
    );
}
