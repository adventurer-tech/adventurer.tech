import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const Layout = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
};

const Main = styled.div`
  padding: ${props =>
    props.layout === Layout.VERTICAL ? "50px 30px" : "32px 27px"};
  background: white;
  box-shadow: 0px 11px 45px 0px rgba(92, 105, 127, 0.1);
  text-align: center;
  width: ${props => props.width || "auto"};

  &:hover {
    box-shadow: 0px 11px 45px 0px rgba(92, 105, 127, 0.25);

    .icon-container {
      background-image: ${props =>
        props.hoverIcon ? `url(${props.hoverIcon})` : `url(${props.icon})`};
    }
  }

  .icon-container {
    height: ${props => (props.iconWidth ? props.iconWidth + "px" : "auto")};
    width: ${props =>
      props.layout === Layout.VERTICAL
        ? "auto"
        : props.iconWidth
        ? props.iconWidth + "px"
        : "auto"};
    background: url(${props => props.icon}) no-repeat;
    background-position: center center;
    background-size: contain;
  }

  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    margin: ${props => (props.layout === Layout.VERTICAL ? "30px 0" : "0 8px")};
  }
  .info {
    color: #9ea6b4;
    line-height: 24px;
    text-align: ${props => props.infoAlign};
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
    const {
      icon,
      title,
      info,
      iconWidth,
      hoverIcon,
      width,
      layout = Layout.VERTICAL,
      infoAlign = "center",
    } = this.props;
    return (
      <Main
        iconWidth={iconWidth}
        icon={icon}
        hoverIcon={hoverIcon}
        width={width}
        layout={layout}
        infoAlign={infoAlign}
      >
        {layout === Layout.VERTICAL && (
          <Fragment>
            <Fade bottom delay={100}>
              <div className="icon-container" />
            </Fade>
            <Fade bottom delay={200}>
              <div className="title">{title}</div>
            </Fade>
          </Fragment>
        )}

        {layout === Layout.HORIZONTAL && (
          <div className="title-container">
            <Fade bottom delay={100}>
              <div className="icon-container" />
            </Fade>
            <Fade bottom delay={200}>
              <div className="title">{title}</div>
            </Fade>
          </div>
        )}

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
  iconWidth: PropTypes.number,
  hoverIcon: PropTypes.string,
  layout: PropTypes.string,
  infoAlign: PropTypes.string,
};
