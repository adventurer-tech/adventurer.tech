import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  display: flex;
  flex-direction: ${props => (props.align === "left" ? "row" : "row-reverse")};
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  img {
    width: 60%;
    flex-shrink: 0;
  }

  .content {
    width: 50%;
    padding: 50px 5%;
    background: white;
    margin-left: ${props => (props.align === "left" ? "-5%" : 0)};
    margin-right: ${props => (props.align === "right" ? "-5%" : 0)};
    transition: 0.5s ease;

    h3 {
      font-size: 22px;
      margin-bottom: 20px;
    }

    p {
      font-size: 13px;
      color: #9ea6b4;
      line-height: 24px;
    }
  }

  &:hover {
    .content {
      margin-left: ${props => (props.align === "left" ? "-7%" : "2%")};
      margin-right: ${props => (props.align === "right" ? "-7%" : "2%")};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;

    img {
      width: 100%;
    }

    .content {
      width: 90%;
      padding: 20px;
      margin: -20px auto 0 auto;

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }

    &:hover {
      margin: -20px auto 0 auto;
    }
  }
`;

export default class CaseItem extends React.PureComponent {
  render() {
    const { img, align } = this.props;
    return (
      <Main align={align} className="clearfix">
        <img src={img} alt="" />
        <div className="content">{this.props.children}</div>
      </Main>
    );
  }
}

CaseItem.propTypes = {
  align: PropTypes.string,
  img: PropTypes.string,
};
