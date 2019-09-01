import React from "react";
import { Menu, Icon, Drawer } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import LargeContainer from "./container-large";

const Header = styled.div`
  width: 100%;
  height: 68px;
  line-height: 68px;
  background: white;

  ${LargeContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ant-menu-item {
    line-height: 66px;
    padding: 0 25px;
  }

  .menu {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .menu {
      display: block;
      position: absolute;
      top: 20px;
      right: 5%;
      font-size: 24px;
    }
  }
`;

const Logo = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 68px;

    img {
      height: 30px;
      margin-right: 10px;
    }

    .logo-title-con {
      line-height: 1;

      .logo-title {
        font-size: 16px;
        margin: 3px 0;
        color: black;
      }

      .logo-sub-title {
        font-size: 12px;
        color: #ccd0d7;
        text-align: center;
      }
    }
  }
`;

const WrapMenu = styled(Menu)`
  &.ant-menu-horizontal {
    background: transparent;
    border-bottom: none;
  }
`;

export default class AdventureHeader extends React.PureComponent {
  state = {
    showDrawer: false,
    smallScreen: window.innerWidth <= 992,
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    this.setState({
      smallScreen: window.innerWidth <= 992,
    });
  };

  showDrawer = () => {
    this.setState({
      showDrawer: true,
    });
  };

  closeDrawer = () => {
    this.setState({
      showDrawer: false,
    });
  };

  renderMenu = mode => {
    return (
      <WrapMenu mode={mode}>
        <WrapMenu.Item>
          <NavLink to="/service">服务</NavLink>
        </WrapMenu.Item>
        <WrapMenu.Item>
          <NavLink to="/cases">案例</NavLink>
        </WrapMenu.Item>
        <WrapMenu.Item>
          <NavLink to="/opinion">观点</NavLink>
        </WrapMenu.Item>
        <WrapMenu.Item>
          <NavLink to="/about">关于</NavLink>
        </WrapMenu.Item>
        <WrapMenu.Item>
          <NavLink to="/join">加入</NavLink>
        </WrapMenu.Item>
      </WrapMenu>
    );
  };

  render() {
    const { showDrawer, smallScreen } = this.state;

    return (
      <Header>
        <LargeContainer>
          <Logo>
            <NavLink to="/">
              <img src="/images/logo.png" alt="" />
              <div className="logo-title-con">
                <div className="logo-title">冒险者科技</div>
                <div className="logo-sub-title">AdventureTech</div>
              </div>
            </NavLink>
          </Logo>
          <Icon
            type="menu"
            className="menu"
            onClick={() => {
              this.showDrawer();
            }}
          />
          {smallScreen ? (
            <Drawer
              className="menu-drawer"
              width={200}
              bodyStyle={{
                background: "white",
                padding: 0,
              }}
              placement="right"
              closable={false}
              visible={showDrawer}
              onClose={this.closeDrawer}
            >
              {this.renderMenu("inline")}
            </Drawer>
          ) : (
            this.renderMenu("horizontal")
          )}
        </LargeContainer>
      </Header>
    );
  }
}
