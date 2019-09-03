import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  margin: 40px 0;
  text-align: center;

  .shape {
    margin-bottom: 20px;

    span {
      width: 30px;
      height: 10px;
      display: inline-block;
      vertical-align: top;

      &.shape-color1 {
        background: rgba(46, 73, 213, 1);
      }

      &.shape-color2 {
        background: rgba(46, 73, 213, 0.5);
      }

      &.shape-color3 {
        background: rgba(46, 73, 213, 0.25);
      }
    }
  }
  .title {
    color: #323854;
    font-weight: 500;
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 16px;
    }
  }
`;

export default class ShapeTitle extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <Main>
        <div className="shape">
          <span className="shape-color1" />
          <span className="shape-color2" />
          <span className="shape-color3" />
        </div>
        <div className="title">{title}</div>
      </Main>
    );
  }
}

ShapeTitle.propTypes = {
  title: PropTypes.string,
};
