import React from "react";

export type MapDetailsModalProps = {
   showModal?: boolean;
   data?: any;
   closeModal?: () => void;
};

const MapDetailsModal: React.FC<MapDetailsModalProps> = ({
   showModal,
   data,
   closeModal
}) => {
   return (
      <div
         className={`h-[500px] w-[300px] bg-white absolute ${
            showModal ? "right-0" : "-right-80"
         } top-[15%]`}
      >
         <div className="bg-white p-2 rounded absolute top-2 left-2 cursor-pointer" onClick={closeModal}>
            Close
         </div>
         <img
            src={data?.image}
            alt="house image"
            className="w-[100%] h-[50%] object-cover"
         />
         <div className="p-2">
            <h1 className="font-semibold">{data?.label}</h1>
            <p className="text-sm">{data?.description}</p>
         </div>
      </div>
   );
};

export default MapDetailsModal;
