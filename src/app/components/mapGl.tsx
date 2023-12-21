"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import MapDetailsModal from "./MapDetailsModal";
import type { MapDetailsModalProps } from "./MapDetailsModal";

const ReactMap = () => {
   const [viewPort, setViewPort] = useState({
      longitude: 75.7873,
      latitude: 26.9124,
      zoom: 8,
   });
   const [showDetailsModal, setShowDetailsModal] =
      useState<MapDetailsModalProps | null>(null);

   function handleClick(e: any) {
      console.log(e);
   }

   useEffect(() => {
      // Check if the Geolocation API is supported by the browser
      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setViewPort({
                  ...viewPort,
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
               });

               console.log(position.coords);
            },
            (error) => {
               console.error("Error getting location:", error.message);
            }
         );
      } else {
         console.error("Geolocation is not supported by your browser.");
      }
   }, []);

   function handleMarkerClick(e: any, data: any) {
      console.log(viewPort.zoom);
      const { lng, lat } = e.target._lngLat;
      if (viewPort.zoom <= 15) {
         setViewPort({
            latitude: lat,
            longitude: lng,
            zoom: viewPort.zoom <= 15 ? viewPort.zoom * 1.2 : viewPort.zoom,
         });
      } else {
         setShowDetailsModal({
            showModal: true,
            data,
         });
      }
   }

   function closeModal() {
      setShowDetailsModal({
         ...showDetailsModal,
         showModal: false
      })
   }

   const markers = [
      {
         latitude: 26.8483569,
         longitude: 75.9168024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 15000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.8453579,
         longitude: 75.8968024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 23000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.8583569,
         longitude: 75.1168024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 34000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.9483569,
         longitude: 75.8968024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 15000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.8953579,
         longitude: 75.8568024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 23000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.1083569,
         longitude: 75.8178024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 34000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.8883569,
         longitude: 75.8128024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 15000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.8673579,
         longitude: 75.8164024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 23000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
         latitude: 26.9283569,
         longitude: 75.8163024,
         label: "Luxury Property in Malviya Nagar Area",
         image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
         price: "Rs. 34000",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
   ];

   return (
      <div className="h-[89vh] w-screen bg-red-50">
         <div className="w-full h-full">
            <Map
               mapLib={import("mapbox-gl")}
               {...viewPort}
               style={{ width: "100%", height: "100%" }}
               onClick={handleClick}
               mapStyle="mapbox://styles/mapbox/streets-v9"
               onMove={(evt) => setViewPort(evt.viewState)}
               mapboxAccessToken="pk.eyJ1Ijoia2VzaGF2c2FpbmkwOTA1IiwiYSI6ImNscWUzdDZkNTBoMnIyam83dTJ0ZjdtbmEifQ.DITgbMfl9m7NVHlJTOzDFw"
            >
               {markers.map((marker, idx) => (
                  <Marker
                     key={idx}
                     latitude={marker.latitude}
                     longitude={marker.longitude}
                     anchor="bottom"
                     offset={[-77, 38]}
                     pitchAlignment="map"
                     onClick={(e) => handleMarkerClick(e, marker)}
                  >
                     <div
                        className={`${
                           viewPort.zoom > 15
                              ? "border-2 border-orange-600 bg-slate-50 rounded-bl-xl rounded-br-xl cursor-pointer"
                              : "bg-slate-200 shadow-md"
                        } p-2 w-max`}
                     >
                        {marker.price}
                     </div>
                  </Marker>
               ))}
            </Map>
         </div>
         <MapDetailsModal
            showModal={showDetailsModal?.showModal}
            data={showDetailsModal?.data}
            closeModal={closeModal}
         />
      </div>
   );
};

export default ReactMap;
