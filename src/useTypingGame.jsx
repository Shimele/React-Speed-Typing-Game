import { useState, useEffect, useRef } from "react";

function useTypingGame() {
  //custom hook
  const startTime = 5;
  const [text, setText] = useState("");
  const [timeRunning, setTimeRunning] = useState(startTime);
  const [timeLeft, setTimeLeft] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textareaRef = useRef(null);

  function grabText(event) {
    const { value } = event.target;
    setText(value);
  }

  function countText(text) {
    const textArray = text.split(" ");
    return textArray.filter((x) => x !== "").length;
  }

  function startGame() {
    setText("");
    setTimeLeft(true);
    setTimeRunning(startTime);
    setWordCount(0);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  useEffect(() => {
    if (timeLeft && timeRunning > 0) {
      setTimeout(() => {
        setTimeRunning((prevCount) => prevCount - 1);
      }, 1000);
    } else if (timeRunning == 0) {
      setTimeLeft(false);
      setWordCount(countText(text));
    }
  }, [timeLeft, timeRunning]);

  return {
    textareaRef,
    text,
    grabText,
    timeLeft,
    timeRunning,
    startGame,
    wordCount,
  };
}

export default useTypingGame;
