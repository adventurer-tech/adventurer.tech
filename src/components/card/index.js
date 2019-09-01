import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const Main = styled.div`
  padding: 50px 30px;
  background: white;
  box-shadow: 0px 11px 45px 0px rgba(92, 105, 127, 0.1);
  text-align: center;
  width: ${props => props.width || "auto"};

  &:hover {
    box-shadow: 0px 11px 45px 0px rgba(92, 105, 127, 0.25);

    .icon-hover {
      display: block;
    }

    .icon {
      display: ${props => props.hoverIcon && "none"};
    }
  }

  img {
    display: block;
    margin: 0 auto;
    width: ${props => props.iconWidth || "auto"};
  }
  .icon-hover {
    display: none;
  }

  .title {
    font-size: 16px;
    margin: 30px 0;
  }
  .info {
    color: #9ea6b4;
    font-size: 13px;
    line-height: 24px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &:hover {
      .icon-hover {
        display: none;
      }

      .icon {
        display: block;
      }
    }
  }
`;

export default class Card extends React.PureComponent {
  render() {
    const { icon, title, info, iconWidth, hoverIcon, width } = this.props;
    return (
      <Main iconWidth={iconWidth} hoverIcon={hoverIcon} width={width}>
        <Fade bottom delay={100}>
          <img src={icon} className="icon" alt="" />
        </Fade>
        {hoverIcon && <img src={hoverIcon} className="icon-hover" alt="" />}
        <Fade bottom delay={200}>
          <div className="title">{title}</div>
        </Fade>
        <Fade bottom delay={300}>
          <div className="info">{info}</div>
        </Fade>
      </Main>
    );
  }
}

Card.propTypes = {
  width: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  iconWidth: PropTypes.string,
  hoverIcon: PropTypes.string,
};
