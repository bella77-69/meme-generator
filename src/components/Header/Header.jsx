import React from "react";
import meme from "../../assets/images/meme.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={meme} className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
    </header>
  );
}
