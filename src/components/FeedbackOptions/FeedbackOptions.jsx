import React, { Component } from "react";
import { Options, Button } from "./styled";
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};