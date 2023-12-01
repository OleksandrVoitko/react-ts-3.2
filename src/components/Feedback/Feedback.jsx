export function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Goog: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedbaks: {positivePercentage}%</p>
    </div>
  );
}
