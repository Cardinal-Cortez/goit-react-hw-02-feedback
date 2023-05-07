import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Section } from "components/Section";
import { Notification } from "components/Notification";
import PropTypes from "prop-types";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = (value) => {
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const options = ['good', 'neutral', 'bad'];
    const positivePercentage = this.countPositiveFeedbackPercentage();
    let content = <Notification message="There is no feedback" />;
    if (total > 0) {
      content = (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      );
    }
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.countTotalFeedback} />
        {content}
      </Section>
    );
  }

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
}
