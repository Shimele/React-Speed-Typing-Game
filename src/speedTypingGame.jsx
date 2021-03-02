import React from "react";
import useTypingGame from "./useTypingGame";

function SpeedTypingGame() {
  const {
    textareaRef,
    text,
    grabText,
    timeLeft,
    timeRunning,
    startGame,
    wordCount,
  } = useTypingGame(); //custom hook

  return (
    <div>
      <h1>How Fast Can You Type?</h1>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={grabText}
        disabled={!timeLeft}
      />
      <h2>
        Time Running: <span>{timeRunning}</span>
      </h2>
      <button onClick={startGame} disabled={timeLeft}>
        Start
      </button>
      <h2>
        Word Count: <span>{wordCount}</span>
      </h2>
    </div>
  );
}

export default SpeedTypingGame;
