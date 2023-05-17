import React, { Component } from "react";
import { H2 } from "./styled";
import PropTypes from "prop-types";

export class Notification extends Component {
  render() {
    const { message} = this.props;
    return (
      <section>
        <H2>{message}</H2>
      </section>
    );
  }
}

Notification.propTypes = {
message: PropTypes.string.isRequired,
};