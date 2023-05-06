import  React, { Component } from "react";
import {StatisticsComponent } from "./styled";



export class Statistics extends Component{
    
render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
    <StatisticsComponent>
        <h2 type="text">Statistics</h2>
            <span className="review">Good: { good}</span>
            <span className="review">Neutral: { neutral}</span>
            <span className="review">Bad: { bad}</span>
        <span>
          Total: {total}
            </span>
            <span>
                PositiveFeedback: {positivePercentage}%
            </span>
      </StatisticsComponent>
    );
  }
}

// Feedback.propTypes = {
//   review: PropTypes.number.isRequired
// }