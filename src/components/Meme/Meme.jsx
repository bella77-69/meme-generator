import React from "react";
import "./Meme.scss";
import memesData from "../../Data/memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <section className="meme">
      <div className="meme-container">
        <button className="meme-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
        <img src={meme.randomImage} className="meme-image" />
      </div>
    </section>
  );
}
