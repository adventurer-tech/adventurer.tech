import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
`;

export default class Title extends React.PureComponent {
  render() {
    const { title, eng } = this.props;
    return (
      <Main>
        <h1>{title}</h1>
        <p>{eng}</p>
      </Main>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  eng: PropTypes.string,
};
