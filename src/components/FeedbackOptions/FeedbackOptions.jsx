import { Button } from 'components/Button/Button';
import { PureComponent } from 'react';

export class FeedbackOptions extends PureComponent {
  options = {
    GOOD: 'good',
    NEUTRAL: 'neutral',
    BAD: 'bad',
  };
  render() {
    console.log('render');
    return (
      <div>
        <Button name={this.options.GOOD} onClick={this.props.handleClick}>
          {this.options.GOOD}
        </Button>
        <Button name={this.options.NEUTRAL} onClick={this.props.handleClick}>
          {this.options.NEUTRAL}
        </Button>
        <Button name={this.options.BAD} onClick={this.props.handleClick}>
          {this.options.BAD}
        </Button>
      </div>
    );
  }
}
