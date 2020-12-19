import React, { useState } from "react";
import "./styles.css";

const vegetablesEmoji = {
  "🍇": "Grapes",
  "🍈": " Melon",
  "🍉": " Watermelon",
  "🍊": " Tangerine",
  "🍋": " Lemon",
  "🍌": " Banana",
  "🍍": " Pineapple",
  "🥭": " Mango",
  "🍎": " Red Apple",
  "🍏": " Green Apple",
  "🍐": " Pear",
  "🍑": " Peach",
  "🍒": " Cherries",
  "🍓": " Strawberry",
  "🥝": " Kiwi Fruit"
};
const vegetablesEmojiArray = Object.keys(vegetablesEmoji);
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "Click on Emoji below or search for emoji👆"
  );

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;
    var meaning = vegetablesEmoji[userInput];
    if (meaning === undefined)
      meaning = "😊We don't have this in our database😊";
    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => {
    var selectedEmoji = vegetablesEmoji[emoji];
    setEmoji(emoji);
    setMeaning(selectedEmoji);
  };

  return (
    <div className="App">
      <header className="header">Know your Emoji</header>
      <div clasName="container">
        <input className="input-data" onChange={emojiInputHandler}></input>
        <h3>{emoji}</h3>
        <h3>{meaning} </h3>
        <div className="emojiContainer">
          {vegetablesEmojiArray.map((emoji) => (
            <span
              className="emojiList"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          ))}
        </div>
      </div>
      <footer className="footer">
        Made with ❤ by Harshith Venkatesh
        <div class="sm-footer">
          <a
            href="https://www.instagram.com/harshith_bing/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Harshith_V007"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/harshi7016">
            <i class="fab fa-github"></i>
          </a>

          <a
            href="https://medium.com/@harshithvenkatesh"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-medium"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/harshithv7016/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>  
        </div>
      </footer>
    </div>
  );
}
