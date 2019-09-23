import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  background: white;
  width: ${props => props.width || "auto"};

  .image-container {
    position: relative;
    height: 280px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .image-title {
      position: absolute;
      z-index: 100;
      color: #ffffff;
      font-size: 24px;
      left: 27px;
      bottom: 16px;
      font-weight: 500;
    }

    .mask {
      position: absolute;
      z-index: 50;
      width: 100%;
      height: 100%;
      background: RGBA(1, 1, 1, 0.3);
      top: 0;
      left: 0;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 400;
    color: rgba(50, 56, 84, 1);
    line-height: 25px;
    padding: 8px 26px;
  }

  .info {
    font-size: 16px;
    font-weight: 400;
    color: rgba(107, 109, 127, 1);
    padding: 0 26px 24px 26px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;

    .image-container {
      height: 180px;

      .image-title {
        font-size: 16px;
        left: 12px;
      }
    }
    .title {
      font-size: 14px;
      padding: 8px 12px;
    }
    .info {
      font-size: 12px;
      padding: 0px 12px 12px 12px;
    }
  }
`;

/**
 * 合作模式card
 */
export default class CooperationCard extends PureComponent {
  render() {
    const { img, imgTitle, info, width, title } = this.props;

    return (
      <Main width={width}>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="image-title">{imgTitle}</div>
          <div className="mask" />
        </div>

        <div className="title">{title}</div>
        <div className="info">{info}</div>
      </Main>
    );
  }
}

CooperationCard.propTypes = {
  width: PropTypes.string,
  img: PropTypes.string,
  imgTitle: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
};
