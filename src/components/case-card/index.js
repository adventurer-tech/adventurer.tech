import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  background: white;
  width: ${props => props.width || "auto"};
  position: relative;
  margin-bottom: 50px;

  &:hover {
    .info {
      opacity: 1;
    }
  }

  .img-container {
    height: 280px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .title {
    padding: 18px;
    font-size: 16px;
    font-weight: 500;
  }

  .info {
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    background: RGBA(66, 91, 216, 0.8);
    color: white;
    padding: 50px 40px 0 40px;
    opacity: 0;
    line-height: 32px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;

    .img-container {
      height: 180px;
    }

    &:hover {
      .info {
        opacity: 0;
      }
    }
  }
`;

export default class CaseCard extends React.PureComponent {
  render() {
    const { img, title, info, width } = this.props;
    return (
      <Main width={width}>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="title">{title}</div>
        <div className="info">{info}</div>
      </Main>
    );
  }
}

CaseCard.propTypes = {
  width: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
};
