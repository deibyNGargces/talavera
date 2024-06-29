import React from "react";

const Maps = ({ urlMap }) => {
  return (
    <div className="border-8 border-white w-full">
      <iframe
        src={urlMap}
        style={{ border: 0 }}
        allowfullscreen=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        loading="lazy"
        className="w-full h-56"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
