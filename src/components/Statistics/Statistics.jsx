import { Feedback } from 'components/Feedback/Feedback';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Component } from 'react';
import { Wrapper } from './Statistics.styled';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    console.log(name);
    this.setState({ [name]: this.state[name] + 1 });
  };
  countTotalFeedback() {
    let totalFeedback = 0;
    const arrFeedback = Object.values(this.state);
    for (const e of arrFeedback) {
      totalFeedback += e;
    }
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good > 0 && this.countTotalFeedback() > 0) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
    }
    return 0;
  }
  render() {
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions handleClick={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Feedback
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}
