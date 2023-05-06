import React, { Component } from "react";
import { Button, FeedbackComponent, FeedbackOptions } from "./styled";
import { Statistics } from "components/Statistics";
// import PropTypes from "prop-types";

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
    const options = ['good', 'neutral', ' bad'];
    const onLeaveFeedback = options.map(btn => (
      <Button key={btn} onClick={() => this.countTotalFeedback(btn)}>
        {btn}
      </Button>));
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <FeedbackComponent>
        <h1>Pleace leave feedback</h1>
        <FeedbackOptions>
          {onLeaveFeedback}
          </FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </FeedbackComponent>
    );
  }
}

// Feedback.propTypes = {
//   children: PropTypes.node.isRequired
// }