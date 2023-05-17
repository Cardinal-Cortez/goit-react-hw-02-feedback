import React, { Component } from "react";
import { SectionConteiner } from "./styled";
import PropTypes from "prop-types";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionConteiner>
        <h2>{title}</h2>
        {children}
      </SectionConteiner>
    );
  }
}

Section.propTypes = {
title: PropTypes.string.isRequired,
children: PropTypes.node.isRequired,
};