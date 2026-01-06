/* eslint-disable no-undef */
import { useEffect, useState } from "react";

export default function TypingAnimation({ text, speed = 80 }) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setOutput(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{output}</span>;
}
