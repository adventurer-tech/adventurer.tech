import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.div`
  text-align: ${props => props.align || "center"};
  margin-bottom: ${props => (props.size === "small" ? "20px" : "50px")};

  .title-name {
    font-size: 34px;
    letter-spacing: 2px;
    font-weight: 500;
    margin-top: ${props => (!props.order ? "-25px" : 0)};
    color: ${props => props.nameColor || "#323854"};
  }
  .title-eng {
    color: ${props => props.engColor || "#ebefff"};
    font-weight: 600;
    margin-top: ${props => (props.order === "1" ? "-20px" : 0)};
    font-size: ${props => (props.size === "small" ? "50px" : "75px")};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${props => (props.size === "small" ? "10px" : "30px")};

    .title-name {
      font-size: 20px;
      margin-top: ${props => (!props.order ? "-10px" : 0)};
    }

    .title-eng {
      font-size: 30px;
      margin-top: ${props => (props.order === "1" ? "-15px" : 0)};
    }
  }
`;

export default class Title extends React.PureComponent {
  renderTitle = title => <div className="title-name">{title}</div>;

  render() {
    const { title, eng, align, order, size, engColor, nameColor } = this.props;
    return (
      <Main
        align={align}
        order={order}
        size={size}
        engColor={engColor}
        nameColor={nameColor}
      >
        {order === "1" && this.renderTitle(title)}
        <div className="title-eng">{eng}</div>
        {!order && this.renderTitle(title)}
      </Main>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  eng: PropTypes.string,
  align: PropTypes.string,
  order: PropTypes.string,
  size: PropTypes.string,
  engColor: PropTypes.string,
  nameColor: PropTypes.string,
};
