import React, { Component } from "react";
import { SectionConteiner } from "./styled";

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