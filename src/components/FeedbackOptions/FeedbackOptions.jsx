import React, { Component } from "react";
import { Options, Button } from "./styled";

export class FeedbackOptions extends Component{
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
    <Options>
      {options.map((option) => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </Options>
    )
  }
}