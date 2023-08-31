import React from "react";
import { useSelector } from "react-redux"

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);

  return (
    <div>
      <ul>
        {bands.map((band, index) => <li key={index}>{band}</li>)}
      </ul>
    </div>

  )
}

export default BandsContainer;
