import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  width: 100%;
  padding: 10px 40px;
  // border-bottom: 1px lightgrey solid;
  .main-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main-top-left {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 20px 20px 10px;
  }
`;

const WrapMenu = styled(Menu)`
  &.ant-menu-horizontal {
    background: transparent;
    border-bottom: none;
  }
`;

export default class AdventureHeader extends React.PureComponent {
  render() {
    return (
      <Main>
        <div className="main-top">
          <NavLink to="/">
            <div className="main-top-left">
              <img src="/images/logo.png" alt="" />
              <div className="main-top-left-title">AdventureTech</div>
            </div>
          </NavLink>

          <div className="main-top-right">
            <WrapMenu mode="horizontal">
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
          </div>
        </div>
      </Main>
    );
  }
}
