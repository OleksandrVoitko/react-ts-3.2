import { Button } from 'components/Button/Button';

export function FeedbackOptions({ handleClick }) {
  const options = {
    GOOD: 'good',
    NEUTRAL: 'neutral',
    BAD: 'bad',
  };
  return (
    <div>
      <Button name={options.GOOD} onClick={handleClick}>
        {options.GOOD}
      </Button>
      <Button name={options.NEUTRAL} onClick={handleClick}>
        {options.NEUTRAL}
      </Button>
      <Button name={options.BAD} onClick={handleClick}>
        {options.BAD}
      </Button>
    </div>
  );
}
