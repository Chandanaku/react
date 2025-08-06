import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { TextInput } from "../Textinput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDispaly";

function CharacterCounter({
  minWords = 1,
  maxWords = 50,
  targetReadingTime,
}: CharacterCounterProps) {
  const [text, setText] = useState("");

  const charLen = text.length;

  const word = (text: string): number => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const wordCount = word(text);
  const withinRange = wordCount >= minWords && wordCount <= maxWords;

  return (
    <>
      <TextInput onTextChange={setText} />

      <StatsDisplay
        stats={{
          characterCount: charLen,
          wordCount: wordCount,
          readingTime: wordCount > 0 ? charLen / wordCount : 0,
        }}
        showReadingTime={true}
      />

      {wordCount > 0 && (
        <p style={{ color: withinRange ? "green" : "red" }}>
          {withinRange
            ? " Word count within range"
            : " Word count out of range"}
        </p>
      )}

      <div
        style={{
          display: "block",
          backgroundColor: "white",
          borderRadius: "5px",
          height: "100px",
          width: "150%",
          color: "black",
        }}
      >
        <p style={{ color: "blue" }}>
          Minimum: {minWords} Maximumwords: {maxWords}
          <br></br>
          Enterd wordCount:
          {wordCount}
          {"   "}
          Reading Time: {targetReadingTime} mins
        </p>
      </div>
    </>
  );
}

export default CharacterCounter;
