import React, { useState, useEffect } from "react";
import "../App.css";

export default function World() {
  useEffect(() => {
    let canvas = document.getElementsByClassName("game-canvas");
    let ctx = canvas.getContext("2d");
    let image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    image.src = "/";
  }, []);

  return (
    <div className="game-container">
      <div className="game-canvas"></div>
    </div>
  );
}
