import React, { Component } from "react";
import loading from "./loader.gif";
export default function Loader() {
  return (
    <div className="img text-center my-4">
      <img
        src={loading}
        alt=""
        style={{ height: "50px", width: "50px", margin: "0 auto" }}
      />
    </div>
  );
}
