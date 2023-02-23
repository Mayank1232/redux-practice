import React from "react";
import { useSelector } from "react-redux";
import BootstrapNavbar from "../components/Navbar/Navbar";

function Favorites() {
  const favorites = useSelector((state) => state.favorite);
  console.log("favorites", favorites);
  return (
    <>
      <BootstrapNavbar />
      <h1>Favorites</h1>
    </>
  );
}

export default Favorites;
