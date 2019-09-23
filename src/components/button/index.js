import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  width: 150px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
  background: ${props =>
    props.type === "yellow" ? "rgba(255, 190, 53, 1)" : "rgba(46, 73, 213, 1)"};
  color: ${props => (props.type === "yellow" ? "rgba(0, 0, 0, 1)" : "white")};
  display: inline-block;
  box-shadow: ${props =>
    props.type === "main" && "0px 6px 11px 0px rgba(46,73,213,0.2)"};

  &:hover {
    color: white;
    background: ${props =>
      props.type === "yellow"
        ? "rgba(255, 190, 53, 0.9)"
        : "rgba(46, 73, 213, 0.9)"};
  }
`;

export default class Button extends React.PureComponent {
  renderTitle = title => <div className="title-name">{title}</div>;

  render() {
    const { title, type } = this.props;
    return (
      <Main type={type} {...this.props}>
        {title}
      </Main>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};
