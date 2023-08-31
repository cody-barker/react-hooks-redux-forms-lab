import React from "react";
import { useSelector, useDispatch } from "react-redux"

function BandsContainer() {

  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();

  return <div>BandsContainer</div>;
}

export default BandsContainer;
