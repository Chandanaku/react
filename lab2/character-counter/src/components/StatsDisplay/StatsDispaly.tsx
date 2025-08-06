import type { StatsDisplayProps } from "../../types";

//StatsDisplay Component
function StatsDisplay({ stats, showReadingTime }: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div>
      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
      {showReadingTime && <p>Reading Time: {readingTime.toFixed(2)} mins</p>}
    </div>
  );
}

export default StatsDisplay;
