import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Section } from "components/Section";
import { Notification } from "components/Notification";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

    onLeaveFeedback = (option) => {
      this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
          ) : (
          <Notification message="There is no feedback yet" />  
        )}
        </Section>
      </div>
    );
  };
}
